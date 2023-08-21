import BanglaTyping from "../Page/BanglaTyping/BanglaTyping";
import Blogs from "../Page/Blogs/Blogs";
import Community from "../Page/Community/Community";
import Lessons from "../Page/Lessons/Lessons/Lessons";
import Login from "../Page/Login/Login/Login";
import SignUp from "../Page/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Page/Home/Home/Home");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/lessons',
        element:<PrivateRoute><Lessons></Lessons></PrivateRoute>
      },
      {
        path:'/banglatype',
        element:<PrivateRoute><BanglaTyping></BanglaTyping></PrivateRoute>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/community',
        element:<PrivateRoute><Community></Community></PrivateRoute>
      }
    ]
  }
])

export default router