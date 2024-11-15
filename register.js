// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_I1Cb2A0tAfvWihigBvcfiZ4jh0kwzX0",
  authDomain: "pawmjeremy.firebaseapp.com",
  projectId: "pawmjeremy",
  storageBucket: "pawmjeremy.firebasestorage.app",
  messagingSenderId: "333479017907",
  appId: "1:333479017907:web:2d7170818f39c3e938dfc6",
  measurementId: "G-1N46Y2PVK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Submit Button
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Account created')
    window.location.href = 'index.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});