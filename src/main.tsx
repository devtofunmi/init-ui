import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log("MODULE LOADED: main.jsx");

const root = document.getElementById('root');
if (!root) {
    console.error("FATAL: Root element not found");
} else {
    console.log("Found root element, mounting...");
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
}
