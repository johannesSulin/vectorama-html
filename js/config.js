import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWl4cNXbyHq9yTA9hAev1-fPvpdjgVbrs",
    authDomain: "aigame-3376a.firebaseapp.com",
    projectId: "aigame-3376a",
    storageBucket: "aigame-3376a.appspot.com",
    messagingSenderId: "880107487317",
    appId: "1:880107487317:web:6012463eacffa31e3e54dc"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }
