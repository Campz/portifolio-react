import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, RootLayout } from '@layouts';
import { AboutMePage, ClientsPage, ContactsPage, Home, ProjectsPage } from '@pages';

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: '/',
        element: <AboutMePage />,
      },
      {
        path: '/projetos',
        element: <ProjectsPage />,
      },
      {
        path: '/clientes',
        element: <ClientsPage />,
      },
      {
        path: '/contatos',
        element: <ContactsPage />,
      },
    ],
  },
]);

export default router;
