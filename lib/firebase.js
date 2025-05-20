import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8EU0OhlQLfGko_S5hOg-bnV5sfWtlUa0",
  authDomain: "nexcis-auth.firebaseapp.com",
  projectId: "nexcis-auth",
  storageBucket: "nexcis-auth.appspot.com",
  messagingSenderId: "331609605171",
  appId: "1:331609605171:web:d1e95d36ec0bc59e780f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Add Google OAuth scopes if needed
provider.addScope('profile');
provider.addScope('email');

export { auth, provider };




