import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Card className='text-center'>
            <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
};

export default Blog;