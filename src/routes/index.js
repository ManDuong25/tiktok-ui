import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
