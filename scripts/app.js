import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
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
  // Simulate an API call to get protected content
  // Replace with actual API call to your server
  setTimeout(() => {
    const tableHtml = `
    <div class="wrapper1">
      <table id="myT" class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>24</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>27</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>22</td>
            <td>Chicago</td>
          </tr>
          <tr>
            <td>David</td>
            <td>32</td>
            <td>Houston</td>
          </tr>
        </tbody>
      </table>
    </div>`;
    document.getElementById('protected-content').innerHTML = tableHtml;

    // Initialize DataTables
    $('#myT').DataTable({
      columnDefs: [
        { width: '10%', targets: 0 },
        { width: '10%', targets: 1 },
        { width: '10%', targets: 2 },
        // Add more column definitions as needed
      ]
    });
  }, 500); // Simulate network delay
}
