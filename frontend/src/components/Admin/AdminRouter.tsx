import { Navigate } from 'react-router';

import Admin from 'components/Admin/Admin';
import BlogPage from 'components/Admin/BlogPage';

import AdminProfessionalPage from 'components/Admin/Professional/AdminProfessionalPage';
import EditExperience from 'components/Admin/Professional/EditExperience/EditExperience';
import EditPersonal from 'components/Admin/Professional/EditPersonal/EditPersonal';
import EditPortfolio from 'components/Admin/Professional/EditPortfolio/EditPortfolio';

const adminRouter = {
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
};

export default adminRouter;
