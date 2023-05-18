import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../LoginLayout/Login/Login";
 
import Register from "../LoginLayout/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Shared/Navigation/Blogs/Blogs";
 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blogs></Blogs>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            
            
        ]
    },
]);


export default router;