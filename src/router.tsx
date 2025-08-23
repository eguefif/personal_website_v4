import { createBrowserRouter, Navigate } from 'react-router';

import App from './App.tsx'
import ProjectDetail from './components/ProfessionalContent/PortFolio/ProjectDetail.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/project/:id',
    Component: ProjectDetail,
  }
]);

export default router;
