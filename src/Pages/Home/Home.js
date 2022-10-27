import React from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../Assets/1.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='fw-bold text-center mt-4 mb-3'>Welcome to <span style={{color: "red"}}>Red</span> Code</h1>
            <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text className='text-center'>
            Red-code is a place, where you can learn different types of programming languages. You can  read the articles and blogs, where you can know more about programming languages. Must Try!!
          </Card.Text>
        </Card.Body>
      </Card>
      <div className='d-flex justify-content-center mt-4'>
      <Button variant="success" className='text-center'><Link className='text-decoration-none text-light fw-semibold' to='/courses'>Browse all our courses</Link></Button>
      </div>
        </div>
    );
};

export default Home;