import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CourseInfo from "../Pages/CourseInfo/CourseInfo";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Toggle from "../Pages/Toggle/Toggle";
import User from "../Pages/User/User";

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
                element: <CourseInfo></CourseInfo>,
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
            }
        ]
    }
])