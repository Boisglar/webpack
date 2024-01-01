import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from '@/pages/About/About.lazy';
import { LazyShop } from '@/pages/Shop/Shop.lazy';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'...loading'}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback={'...loading'}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const countainer = createRoot(root);

countainer.render(<RouterProvider router={router} />);
