import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseInfo = () => {
    const courseInfo = useLoaderData();
    const {title,description,image,rating} = courseInfo;
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{rating.rate}</Card.Text>
                   
      </Card.Body>
    </Card>
    );
};

export default CourseInfo;