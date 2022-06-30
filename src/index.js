import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./style/style.css";
import "./style/sliderStyle.css"
import "./style/footer.css"
import "./style/checkout.css"
import "./style/searchBar.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBX_bbo-EtghxuzYIBCB509yZ5C__V4dA",
  authDomain: "miproyecto-1a059.firebaseapp.com",
  projectId: "miproyecto-1a059",
  storageBucket: "miproyecto-1a059.appspot.com",
  messagingSenderId: "950027966236",
  appId: "1:950027966236:web:cd64be889374124dabccd9"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
