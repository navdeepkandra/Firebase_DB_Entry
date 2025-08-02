import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAW831f3a-wKna6c0_U8nJWNgEAX4fhGX8",
  authDomain: "yotube-app-c0f86.firebaseapp.com",
  projectId: "yotube-app-c0f86",
  storageBucket: "yotube-app-c0f86.firebasestorage.app",
  messagingSenderId: "989148919507",
  appId: "1:989148919507:web:d5e0f4b92f12c6a1b84626",
  databaseUrl: 'https://yotube-app-c0f86-default-rtdb.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);