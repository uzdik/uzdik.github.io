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
  fetchCSVData('/path/to/protected/data.csv', (data) => {
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
      console.error('Error fetching CSV data:', err);
    }
  });
}

function renderTable(data) {
  const table = document.createElement('table');
  table.id = 'myT';
  table.className = 'dataframe table table-striped';

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);

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
  
  document.getElementById('protected-content').appendChild(table);

  $('#myT').DataTable({
    paging: false,
    ordering: true,
    searching: true,
    info: false
  });

  const dataTable = $('#myT').DataTable();
  $('#search-input').on('keyup change', function() {
    dataTable.search(this.value).draw();
  });
}
