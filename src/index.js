import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { SuperAdminProvider } from './context/SuperAdminContext';

const root = createRoot(document.getElementById('root'));
root.render(<SuperAdminProvider>
        <App />
    </SuperAdminProvider>);