import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/theme.css';
import { worker } from './mocks/browser';

// Start the mocking service worker for orders API
async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

// Ensure that mock service worker is active before rendering the app
prepare().then(() => {
  import('./App').then(({ default: App }) => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});
