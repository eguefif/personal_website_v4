import { createBrowserRouter, Navigate } from 'react-router';

import App from './App.tsx'

import Admin from 'components/Admin/Admin';

import AdminProfessionalPage from 'components/Admin/Professional/AdminProfessionalPage';
import EditExperience from 'components/Admin/Professional/EditExperience';
import EditPersonal from 'components/Admin/Professional/EditPersonal';
import EditPortfolio from 'components/Admin/Professional/EditPortfolio';

import BlogPage from 'components/Admin/BlogPage';


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/admin',
    Component: Admin,
    children: [
      { 
        index: true, 
        element: <Navigate to="professional" replace /> 
      },
      { 
        path: 'professional',
        Component: AdminProfessionalPage,
        children: [
          {
            path: 'personal',
            Component: EditPersonal
          },
          {
            path: 'experience',
            Component: EditExperience
          },
          {
            path: 'portfolio',
            Component: EditPortfolio
          },
        ],
      },
      { path: 'blog', Component: BlogPage },
    ]
  }
]);

export default router;
