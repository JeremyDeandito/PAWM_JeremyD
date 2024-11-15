// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const db = getFirestore(app);

async function saveUserState(userId, state) {
  try {
    await setDoc(doc(db, 'userStates', userId), state);
    console.log('User state saved successfully');
  } catch (error) {
    console.error('Error saving user state:', error);
  }
}

function getCurrentState() {
  const selectedElement = document.querySelector('.element.selected');
  return {
    selectedElement: selectedElement ? selectedElement.getAttribute('data-symbol') : null,
  };
}

// Logout Button
const logout = document.getElementById('logout-button');
logout.addEventListener('click', async function(event) {
  event.preventDefault();
  const user = auth.currentUser;
  if (user) {
    const userState = getCurrentState();
    try {
      await saveUserState(user.uid, userState);
    } catch (error) {
      console.error('Error saving user state:', error);
    }
  }
  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Logout successful')
    window.location.href = 'login.html';
  }).catch((error) => {
    // An error happened.
    console.error('Logout error:', error);
  });
});