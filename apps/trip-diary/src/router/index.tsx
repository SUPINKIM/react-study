import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import NotFound from '@/pages/not-found';
import MainLayout from '@/components/layout/main';
import App from '@/App';
import UnAuthLayout from '@/components/layout/un-auth';
import Login from '@/pages/login';
import Signup from '@/pages/signup';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    }
                ]
            },
            {
                element: <UnAuthLayout />,
                children: [
                    {
                        path: '/login',
                        element: <Login />
                    },
                    {
                        path: '/signup',
                        element: <Signup />
                    }
                ]
            }
        ]
    }
]);
