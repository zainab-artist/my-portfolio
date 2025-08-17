import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // اطمینان حاصل کنید App.jsx وجود دارد
import './index.css' // اگر از CSS全局 استفاده می‌کنید

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)