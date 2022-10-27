import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category/')
        .then(res => res.json())
        .then(data => setCourse(data));
    }, []);
    return (
        <div className='ms-5'>
            <h2 className='mb-4 fw-bold text-warning'>Course List</h2>
           {
            course.map(c=> <p key={c.id}>
                <Button variant='outline-info p-3 text-dark' ><Link className='text-decoration-none text-dark' style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}} to={`/courses/${c.id}`}>{c.title}</Link></Button>
            </p>)
           } 
        </div>
    );
};

export default RightSideNav;