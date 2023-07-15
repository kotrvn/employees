import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Paths } from './paths';
import { Login } from './pages/Login';
import { ConfigProvider, theme } from 'antd';
import { Register } from './pages/Register';

import './index.css';
import { Auth } from './features/auth/auth';
import { Employes } from './pages/Employees';
import { AddEmployee } from './pages/AddEmployee';
import { Status } from './pages/Status';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employes />
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  },

  {
    path: Paths.employeeAdd,
    element: <AddEmployee />
  },

  {
    path: `${Paths.status}/:status`,
    element: <Status />
  },

])


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
