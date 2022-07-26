import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NetflixContextProvider } from './context/NetflixContext';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NetflixContextProvider>
      <App />
    </NetflixContextProvider>
  </React.StrictMode>
)
