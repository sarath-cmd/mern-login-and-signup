import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {AuthProvider} from './states/authContext'
import { LoginProvider } from './states/loginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);