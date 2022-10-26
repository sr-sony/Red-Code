import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CourseInfo from "../Pages/CourseInfo/CourseInfo";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Toggle from "../Pages/Toggle/Toggle";
import User from "../Pages/User/User";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CourseInfo></CourseInfo></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/toggle',
                element: <Toggle></Toggle>
            },
            {
                path: '/user',
                element: <User></User>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])