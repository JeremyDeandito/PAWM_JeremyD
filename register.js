// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const db = getFirestore(app);


// Submit Button
const submit = document.getElementById('submit');
submit.addEventListener('click', async function(event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user name and initial state
    const userName = email.split('@')[0]; // Example: use the part before '@' as the user name
    const userState = {
      userName: userName,
      isReturningUser: false // New user
    };
    await setDoc(doc(db, 'userStates', user.uid), userState);
    alert('Account created');
    window.location.href = 'home.html'; // Redirect to home.html after successful registration
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
});