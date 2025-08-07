import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { AuthPage } from '@/pages/Auth';
import AdminPage from '@/pages/Admin/ui/Page';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: '/', element: <AuthPage /> },
      { path: '/page', element: <AdminPage /> },
    ],
  },
]);
