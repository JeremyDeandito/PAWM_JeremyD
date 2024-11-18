// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, getDoc , setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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

async function restoreUserState(userId) {
  try {
    const docRef = doc(db, 'userStates', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userState = docSnap.data();
      console.log('User state:', userState);
      if (userState.selectedElement) {
        showElementInfo(userState.selectedElement);
        selectElementButton(userState.selectedElement);
      }
      updateGreetingText(userState.userName, userState.isReturningUser);
    } else {
      console.log('No user state found');
    }
  } catch (error) {
    console.error('Error retrieving user state:', error);
  }
}

function selectElementButton(symbol) {
  const selectedElement = document.querySelector(`.element[data-symbol="${symbol}"]`);
  if (selectedElement) {
    selectedElement.classList.add('selected');
    selectedElement.click();
  }
}

function updateGreetingText(userName, isReturningUser) {
  const greetingText = document.getElementById('greeting-text');
  if (isReturningUser) {
    greetingText.textContent = `Welcome back, ${userName}!`;
  } else {
    greetingText.textContent = `Hello, ${userName}!`;
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    restoreUserState(user.uid);
  } else {
    console.log('No user is signed in');
  }
});

// Submit Button
const submit = document.getElementById('submit');
submit.addEventListener('click', async function(event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    alert('Signed in successfully');
    const userName = email.split('@')[0];
    const userState = {
      userName: userName,
      isReturningUser: true
    };
    await setDoc(doc(db, 'userStates', userCredential.user.uid), userState, { merge: true });
    window.location.href = 'home.html';
  } catch (error) {
    console.error('Error signing in:', error);
    alert('Error signing in');
  }
});