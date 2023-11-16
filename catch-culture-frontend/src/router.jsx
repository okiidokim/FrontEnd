import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import Category from './pages/category/Category';
import Mypage from './pages/mypage/Mypage';
import CulturalEventDetail from './pages/culturalEventDetail/culturalEventDetail';
import Login from './pages/login/Login';
import Notify from './pages/mypage/Notify';
import PointHistory from './pages/mypage/PointHistory';
import Reviews from './pages/mypage/Reviews';
import Likes from './pages/mypage/LikeList';
import Bookmarks from './pages/mypage/BookmarkList';
import Visited from './pages/mypage/Visited';
import ProfileEdit from './pages/mypage/ProfileDetail';
import PointLevel from './pages/mypage/PointLevel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
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
      {
        path: '/test',
        element: <CulturalEventDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/notify',
        element: <Notify />,
      },
      {
        path: '/point-history',
        element: <PointHistory />,
      },
      {
        path: '/review-list',
        element: <Reviews />,
      },
      {
        path: '/like-list',
        element: <Likes />,
      },
      {
        path: '/bookmark-list',
        element: <Bookmarks />,
      },
      {
        path: '/visited-list',
        element: <Visited />,
      },
      {
        path: '/profile-edit',
        element: <ProfileEdit />,
      },
      {
        path: '/level',
        element: <PointLevel />,
      },
    ],
  },
]);

export default router;
