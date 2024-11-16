import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDx23niqV-gn3hQt4O659wqHDFHUnxUgvE",
  authDomain: "mary-s-kitchen1070.firebaseapp.com",
  projectId: "mary-s-kitchen1070",
  storageBucket: "mary-s-kitchen1070.firebasestorage.app",
  messagingSenderId: "119524401774",
  appId: "1:119524401774:web:b544c47838ca5b42c93c7f",
  measurementId: "G-7VJ43N4TVJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);