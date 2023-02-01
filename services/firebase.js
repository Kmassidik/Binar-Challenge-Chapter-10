import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfpuZjgrIpw_C4hVQVeboRXOnpk0bnyz0",
  authDomain: "challenge-chapter-10.firebaseapp.com",
  databaseURL: "https://challenge-chapter-10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "challenge-chapter-10",
  storageBucket: "challenge-chapter-10.appspot.com",
  messagingSenderId: "325113462697",
  appId: "1:325113462697:web:edc0bead2a6cab45c1ceb8",
  measurementId: "G-FEF4YB4G1Z"
};

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app)
const database = getDatabase(app)
  
export {
    database,
}
  
export default authFirebase