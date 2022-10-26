import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h1>All course list {courses.length}</h1>
            {
                courses.map(course => <Courses key={course.id} course={course}></Courses>)
            }
        </div>
    );
};

export default AllCourses;