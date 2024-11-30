import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { appRouter } from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Utill/appStore.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);


