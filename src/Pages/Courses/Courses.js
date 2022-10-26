import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Courses = ({course}) => {
    const {title,image,description,id} = course;
    console.log(course);
    return (
        <Card className='card-container'>
            <Card.Img variant="top" src={image} className='card-img' />
            <Card.Body>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text className='card-description'>{description}</Card.Text>
                    <Link to={`/courses/${id}`}>
                        <Button variant="primary" className='card-btn'>See More</Button>
                    </Link>
            </Card.Body>
        </Card>
    );
};

export default Courses;