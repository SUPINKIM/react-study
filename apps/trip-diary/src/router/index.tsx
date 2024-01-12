import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/home';
import NotFound from '@/pages/not-found';
import MainLayout from '@/components/layout/main';
import App from '@/App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    }
                ]
            }
        ]
    }
]);
