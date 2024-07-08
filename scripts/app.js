import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; 

const firebaseConfig = {
  apiKey: "AIzaSyAEZ3wZZfUI7dZdUWnDZrhb2GxjZ3rqOL8",
  authDomain: "uzdik-login.firebaseapp.com",
  projectId: "uzdik-login",
  storageBucket: "uzdik-login.appspot.com",
  messagingSenderId: "449366953684",
  appId: "1:449366953684:web:a49df1df53499dbca7b541",
  measurementId: "G-23VBT7907F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById('login').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      document.getElementById('login-logout-link').textContent = 'Шығу';
      document.getElementById('login-logout-link').onclick = logout;
      loadProtectedContent();
    })
    .catch((error) => {
      alert(error.message);
    });
}

window.logout = function() {
  signOut(auth).then(() => {
    document.getElementById('login').style.display = 'block';
    document.getElementById('content').style.display = 'none';
    document.getElementById('login-logout-link').textContent = 'Кіру';
    document.getElementById('login-logout-link').onclick = login;
  }).catch((error) => {
    alert(error.message);
  });
}

window.onload = function() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      document.getElementById('login-logout-link').textContent = 'Шығу';
      document.getElementById('login-logout-link').onclick = logout;
      loadProtectedContent();
    } else {
      document.getElementById('login').style.display = 'block';
      document.getElementById('content').style.display = 'none';
      document.getElementById('login-logout-link').textContent = 'Кіру';
      document.getElementById('login-logout-link').onclick = login;
    }
  });
}

function loadProtectedContent() {
  fetchCSVData('/assets/css/styles.css', (data) => {
    renderTable(data);
  });
}

function fetchCSVData(url, callback) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      callback(results.data);
    },
    error: function(err) {
      console.error('No data:', err);
    }
  });
}



function renderTable(data) {
  if ($.fn.DataTable.isDataTable('#myT')) {
    $('#myT').DataTable().destroy();
    $('#myT').remove();
  }

  const table = document.createElement('table');
  table.id = 'myT';
  table.className = 'dataframe table table-striped';
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tfoot = document.createElement('tfoot'); // Create tfoot
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  const footerRow = document.createElement('tr'); 
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
    const footTh = document.createElement('th');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ``;
    input.dataset.index = headers.indexOf(header);
    footTh.appendChild(input);
    footerRow.appendChild(footTh);
  });

  thead.appendChild(headerRow);
  tfoot.appendChild(footerRow); 

  data.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
      const td = document.createElement('td');
      td.textContent = row[header];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tfoot);

  document.getElementById('protected-content').appendChild(table);

  const dataTable = $('#myT').DataTable({
    pageLength: 5,
    paging: true,
    ordering: true,
    searching: true,
    info: true,
    order: [[headers.indexOf('Мин. балл'), 'desc']],
    //search: {search: 'Информатика'},
    fixedColumns: {
      leftColumns: 0, // Initially no columns fixed
      rightColumns: 0
    },
  });

  $(dataTable.table().container()).on('keyup', 'tfoot input', function() {
    dataTable
      .column($(this).data('index'))
      .search(this.value)
      .draw();
  });

  const fixColumnsForMobile = () => {
    if (window.innerWidth <= 600) {
        $('#myT thead th, #myT tbody td, #myT tfoot td').removeClass('fixed-column');
        $('#myT thead tr').each(function () {
            $(this).children('th').eq(3).addClass('fixed-column');
            $(this).children('th').eq(7).addClass('fixed-column');
            $(this).children('th').eq(8).addClass('fixed-column');
        });
        
        $('#myT tbody tr').each(function () {
            $(this).children('td').eq(3).addClass('fixed-column');
            $(this).children('td').eq(7).addClass('fixed-column');
            $(this).children('td').eq(8).addClass('fixed-column');
        });
        
        $('#myT tfoot tr').each(function () {
            $(this).children('td').eq(3).addClass('fixed-column');
            $(this).children('td').eq(7).addClass('fixed-column');
            $(this).children('td').eq(8).addClass('fixed-column');
        });
    } else {
        $('#myT thead th, #myT tbody td, #myT tfoot td').removeClass('fixed-column');
    }
};


  fixColumnsForMobile();
  window.addEventListener('resize', fixColumnsForMobile);

  dataTable.on('draw', fixColumnsForMobile);

  $('#search-input').on('keyup change', function() {
    dataTable.search(this.value).draw();
  });
}
