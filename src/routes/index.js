import { HeaderOnly } from '~/components/Layouts';
import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import SearchPage from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: SearchPage,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
