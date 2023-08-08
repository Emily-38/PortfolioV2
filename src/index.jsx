import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Presentation from './pages/Presentation/Presentation';
import Erreur from './pages/Erreur/Erreur';
import Formations from './pages/Formations/Formations';
import ExperiencesProfessionnelles from './pages/ExperiencesProfessionnelles/ExperiencesProfessionnelles';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/presentation',
        element: <Presentation />,
      },
      {
        path: '/formations',
        element: <Formations />,
      },
      {
        path: 'experiencesProfessionnelles',
        element: <ExperiencesProfessionnelles />,
      },
    ],
  },
  {
    path: '*',
    element: <Erreur />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
