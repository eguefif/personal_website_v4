import { createBrowserRouter, Navigate } from 'react-router';

import App from './App.tsx'


import BlogPage from 'components/Admin/BlogPage';

import adminRouter from 'components/Admin/AdminRouter';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  adminRouter,
]);

export default router;
