import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TareaContextProvider } from './context/TareaContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TareaContextProvider>
        <App />
    </TareaContextProvider>
  </React.StrictMode>
);
