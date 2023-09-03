
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import HomePage from './pages/homePage/HomePage'
import RootLayout from './pages/Root';
import ErrorPage from './pages/error/Error'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import MobileDetailPage from './pages/mobileDetailPage/mobileDetailPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
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

    return <>
        <RouterProvider router={router} />
    </>;
  }

export default App;
