import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReactToPdf from 'react-to-pdf';
import { Button } from 'react-bootstrap';

const CourseInfo = () => {
    const courseInfo = useLoaderData();
    const {title,description,image,rating} = courseInfo;
    const pdfRef = useRef();
    return (
        <div ref = {pdfRef}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{rating.rate}</Card.Text>                
                </Card.Body>
                <ReactToPdf targetRef = {pdfRef} scale={0.6}>
                    {({toPdf}) => <Button variant="danger" onClick={toPdf} style={{margin : "10px auto",boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" }}>Download PDF</Button>}
                </ReactToPdf>
            </Card>
    
        </div>
    );
};

export default CourseInfo;