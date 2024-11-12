import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Service from './pages/Service/Service.jsx';
import Movie from './pages/Home/sideBarMenu/Movie.jsx';
import Series from './pages/Home/sideBarMenu/Series.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/movie",
        element:<Movie></Movie>,
      },
      {
        path:"/series",
        element:<Series></Series>,
      }   
    ]
  },
  {
    path:"/about",
    element:<About></About>,
  },
  {
    path:"/blog",
    element:<Blog></Blog>,
  },
  {
    path:"/contact",
    element:<Contact></Contact>,
  },
  {
    path:"/service",
    element:<Service></Service>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
