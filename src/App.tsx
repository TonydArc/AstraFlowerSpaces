/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './layout/Layout';
import Home from './page/HomePage';
import PageNotFound from './page/404_Page';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Contact from './page/Contact';
import BookingForm from './page/Booking';
import UserProfile from './page/UserProfile';
import OfficeList from './page/OfficeList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Sử dụng Layout làm bố cục chung
    children: [
      {
        index: true, // Route mặc định ("/")
        element: <Home />,
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "booking",
        element: <BookingForm/>
      },
      {
        path: "profile",
        element: <UserProfile/>
      },
      {
        path: "officelist",
        element: <OfficeList/>
      },
      {
        path: "*",
        element: <PageNotFound/>
      }
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;