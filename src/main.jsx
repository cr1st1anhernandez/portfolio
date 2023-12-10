import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-zinc-100 text-[#2c3645] dark:bg-[#1f2937] dark:text-zinc-100">
      <App />
    </div>
  </React.StrictMode>,
)
