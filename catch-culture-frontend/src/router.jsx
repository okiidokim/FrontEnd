import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import Category from './pages/category/Category';
import Mypage from './pages/mypage/Mypage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
