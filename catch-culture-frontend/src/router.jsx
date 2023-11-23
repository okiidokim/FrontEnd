import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import Category from './pages/category/Category';
import Mypage from './pages/mypage/Mypage';
import CulturalEventDetail from './pages/culturalEventDetail/CulturalEventDetail';
import Login from './pages/login/Login';
import Notify from './pages/mypage/Notify';
import PointHistory from './pages/mypage/PointHistory';
import Reviews from './pages/mypage/Reviews';
import Likes from './pages/mypage/LikeList';
import Bookmarks from './pages/mypage/BookmarkList';
import Visited from './pages/mypage/Visited';
import ProfileEdit from './pages/mypage/ProfileDetail';
import PointLevel from './pages/mypage/PointLevel';
import Search from './pages/search/Search';
import VisitAuth from './pages/visitAuth/VisitAuth';
import Report1 from './pages/reportPage/report1/Report1';
import Report2 from './pages/reportPage/report2/Report2';
import Report3 from './pages/reportPage/report3/Report3';

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
        path: '/event/:id',
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
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/event/:id/visit',
        element: <VisitAuth />,
      },
      {
        path: '/report1',
        element: <Report1 />,
      },
      {
        path: '/report2',
        element: <Report2 />,
      },
      {
        path: '/report3',
        element: <Report3 />,
      },
    ],
  },
]);

export default router;
