import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import RightSideNav from '../RightSideNav/RightSideNav';

const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
            <Container className = "course-container mt-5">
                <Row>
                    <Col lg="9">
                        <div>
                            <h2 className ="text-center fw-bold mb-4 text-danger">Our Course Offerings</h2>
                            {
                                courses.map(course => <Courses key={course.id} course={course}></Courses>)
                            }
                        </div>
                        
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
        </Container>
    );
};

export default AllCourses;