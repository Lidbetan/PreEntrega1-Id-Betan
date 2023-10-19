import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-0YNbByze9MbLLXzoMYHXUajvFi9Mmw",
  authDomain: "rock-and-d-e-store.firebaseapp.com",
  projectId: "rock-and-d-e-store",
  storageBucket: "rock-and-d-e-store.appspot.com",
  messagingSenderId: "232606928583",
  appId: "1:232606928583:web:7e9f5f44ecf5688f08b8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
