import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    const {title,image,description,id} = course;
    console.log(course);
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}
                    </Card.Text>
                    <Link to={`/courses/${id}`}>
                        <Button variant="primary">See More</Button>
                    </Link>
      </Card.Body>
    </Card>
    );
};

export default Courses;