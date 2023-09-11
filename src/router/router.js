import BanglaTyping from "../Page/BanglaTyping/BanglaTyping";
import BlogWrite from "../Page/Blogs/BlogWrite";
import Blogs from "../Page/Blogs/Blogs";
import FullBlog from "../Page/Blogs/FullBlog";
import Community from "../Page/Community/Community";
import AdminDashboard from "../Page/Dashboard/AdminDashboard/AdminDashboard";
import AllBlogs from "../Page/Dashboard/AllBlogs/AllBlogs";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import BlogsApproval from "../Page/Dashboard/BlogsApproval/BlogsApproval";
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard";
import MyBlogs from "../Page/Dashboard/MyBlogs/MyBlogs";
import Lessons from "../Page/Lessons/Lessons/Lessons";
import Login from "../Page/Login/Login/Login";
import SignUp from "../Page/Login/SignUp/SignUp";
import Error from "../Page/Shared/Error/Error";
import Profile from "../Page/Shared/Profile/Profile";
import DashboardLayout from "../layout/DashboardLayout";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Page/Home/Home/Home");

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement: <Error></Error>,
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
        element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
      },{
        path:'/blogWrite',
        element:<PrivateRoute><BlogWrite></BlogWrite></PrivateRoute>
      },
      {
        path:'/blog/:id',
        element:<PrivateRoute><FullBlog></FullBlog></PrivateRoute>
      },
      {
        path:'/community',
        element:<PrivateRoute><Community></Community></PrivateRoute>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      }
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute><AdminRoute><DashboardLayout></DashboardLayout></AdminRoute></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<AdminRoute><Dashboard></Dashboard></AdminRoute>
      },
      {
        path:'/dashboard/admindashboard',
        element:<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
      },
      {
        path:'/dashboard/allusers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path:'/dashboard/allblogs',
        element:<AdminRoute><AllBlogs></AllBlogs></AdminRoute>
      },
      {
        path:'/dashboard/blogsapproval',
        element:<AdminRoute><BlogsApproval></BlogsApproval></AdminRoute>
      },
      {
        path:'/dashboard/myblogs',
        element:<AdminRoute><MyBlogs></MyBlogs></AdminRoute>
      }
    ]
  }
])

export default router