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
    document.getElementById('protected-content').innerHTML = 'Арнайы бетке қош келдіңіз!<br>Менің банк шотым: 1234567890';
  }, 500); // Simulate network delay
}
