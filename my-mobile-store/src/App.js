
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import HomePage from './pages/homePage/index'  
import RootLayout from './pages/Root';
import ErrorPage from './pages/error/Error'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import MobileDetailPage from './pages/mobileDetailPage/index';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'mobile',
        children: [
          {
            path: ':mobileId',
            id: 'mobile-detail',
            element: <MobileDetailPage />
          },
        ],
      },

    ],
  },
])
function App() {
  const [queryClient] = useState(() => new QueryClient());

  return <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>;
}

export default App;
