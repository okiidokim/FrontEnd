import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main/Main';
import Map from './pages/map/Map';
import Category from './pages/category/Category';
import Mypage from './pages/mypage/Mypage';
import CulturalEventDetail from './pages/culturalEventDetail/culturalEventDetail';
import Login from './pages/login/Login';

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
        ],
    },
]);

export default router;
