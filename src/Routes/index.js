import Home from '~/pages/Home';
import Blog from '~/pages/Blog';
import Course from '~/pages/Course';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import Login from '~/pages/Login';
import NoSideBar from '~/components/Layouts/NoSideBar';
import NotFound from '~/pages/NotFound';
import MyCourse from '~/pages/MyCourse';

const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/blogs',
        element: Blog,
    },
    {
        path: '/courses',
        element: Course,
    },
    {
        path: '/my-course',
        element: MyCourse,
    },
    {
        path: '/profile',
        element: Profile,
        layout: NoSideBar,
    },
    {
        path: '/setting',
        element: Setting,
        layout: NoSideBar,
    },
    {
        path: '/login',
        element: Login,
        layout: null,
    },
    {
        path: '*',
        element: NotFound,
        layout: null,
    },
];

const privateRoute = [];

export { privateRoute, publicRoutes };
