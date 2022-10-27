import React from 'react';
import { Card } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>What is programming?</Card.Header>
          <Card.Body>
            <Card.Text>
            As a noun, a program, also called an application or software, is a set of instructions that process input, manipulate data, and output a result. For example, Microsoft Word is a word processing program that allows users to create and write documents.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>Python vs JavaScript</Card.Header>
          <Card.Body>
            <Card.Text>
            In general, Python is a programming language that conforms to code readability and compact syntax, whereas JavaScript focuses on ECMAScript standards. However, it's not as simple as that. There is a range of factors to compare these two old stagers and choose the best one for your project.  Developers use Python for a range of scientific applications. They use JavaScript for web development, user-facing functionality, and servers.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card variant='bg-dark' className='text-center mb-4'>
            <Card.Header className='display-6 fw-semibold'>What is data structure in programming language?</Card.Header>
          <Card.Body>
            <Card.Text>
            A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently. A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    );
};

export default FAQ;