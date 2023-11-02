import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);

export default router;
