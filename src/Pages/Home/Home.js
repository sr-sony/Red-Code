import React from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../Assets/1.png';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <h1 className='fw-bold'>Welcome to <span style={{color: "red"}}>Red</span> Code</h1>
            <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>
            Red-code is a place, where you can learn different types of programming languages. You can  read the articles and blogs, where you can know more about programming languages. Must Try!!
          </Card.Text>
        </Card.Body>
      </Card>
      <Button variant="outline-primary">Browse all our courses</Button>
        </div>
    );
};

export default Home;