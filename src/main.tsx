import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { StoreContext, rootStore } from './stores/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={rootStore}>
    <App />
    </StoreContext.Provider>
  </StrictMode>
);
