import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NetflixContextProvider } from './context/NetflixContext';
import { ProfilesProvider } from './context/ProfilesContext';
import { VisibilityHeaderContextProvider } from './context/visibilityHeaderContext';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NetflixContextProvider>
        <VisibilityHeaderContextProvider>
          <ProfilesProvider>
            <App />
          </ProfilesProvider>
        </VisibilityHeaderContextProvider>
      </NetflixContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
