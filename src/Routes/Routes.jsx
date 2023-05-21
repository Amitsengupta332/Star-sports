import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../LoginLayout/Login/Login";

import Register from "../LoginLayout/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Shared/Navigation/Blogs/Blogs";
import AddToys from "../pages/Shared/Navigation/AddToys/AddToys";
import MyToys from "../pages/Shared/Navigation/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/Shared/Navigation/AllToys/AllToys";
import ViewDetails from "../pages/Shared/Navigation/ViewDetails/ViewDetails";
import Update from "../pages/Shared/Navigation/Update/Update";


const router = createBrowserRouter([
    //https://toy-marketplace-server-hazel.vercel.app/viewDetails/${params.id}
    //https://toy-marketplace-server-hazel.vercel.app/updated/${params.id}
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/addToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/myToys',
                element: <PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>,
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-hazel.vercel.app/viewDetails/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-hazel.vercel.app/updated/${params.id}`)
            }


        ]
    },
]);


export default router;