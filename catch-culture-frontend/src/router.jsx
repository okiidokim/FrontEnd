import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import Category from './pages/category/Category';
import Mypage from './pages/mypage/Mypage';
import CulturalEventDetail from './pages/culturalEventDetail/CulturalEventDetail';
import Login from './pages/login/Login';
import PointHistory from './pages/mypage/PointHistory';
import Reviews from './pages/mypage/Reviews';
import Likes from './pages/mypage/LikeList';
import Bookmarks from './pages/mypage/BookmarkList';
import Visited from './pages/mypage/Visited';
import ProfileEdit from './pages/mypage/ProfileDetail';
import PointLevel from './pages/mypage/PointLevel';
import Search from './pages/search/Search';
import VisitAuth from './pages/visitAuth/VisitAuth';
import Review from './pages/reviewPage/Review';
import Report1 from './pages/reportPage/report1/Report1';
import Report2 from './pages/reportPage/report2/Report2';
import Report3 from './pages/reportPage/report3/Report3';
import ReportList from './pages/mypage/ReportList';
import VistiAuthList from './pages/admin/VisitAuthList';
import ReportAuthList from './pages/admin/ReportAuthList';
import AdminReport from './pages/admin/AdminReport';
import AdminVisit from './pages/admin/AdminVisit';
import PointUsage from './pages/mypage/pointpage/PointUsage';
import Emogee from './pages/mypage/pointpage/Emogee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/main',
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
        path: '/event/:id/visit',
        element: <VisitAuth />,
      },
      {
        path: '/event/:id/review',
        element: <Review />,
      },
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/point-history',
        element: <PointHistory />,
      },
      {
        path: '/review/list',
        element: <Reviews />,
      },
      {
        path: '/like/list',
        element: <Likes />,
      },
      {
        path: '/bookmark/list',
        element: <Bookmarks />,
      },
      {
        path: '/visited/list',
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
      {
        path: '/report/list',
        element: <ReportList />,
      },
      {
        path: '/visitauth/list',
        element: <VistiAuthList />,
      },
      {
        path: '/reportauth/list',
        element: <ReportAuthList />,
      },
      {
        path: '/reportauth/:id',
        element: <AdminReport />,
      },
      {
        path: '/visitauth/:id',
        element: <AdminVisit />,
      },
      {
        path: '/pointusage',
        element: <PointUsage />,
      },
      {
        path: '/pointusage/emogee',
        element: <Emogee />,
      },
    ],
  },
]);

export default router;
