import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container bg-dark text-light text-center mt-5 p-4'>
            <div>
                <h1 className='fw-bold mb-4'>Red-Code</h1>
                <div className='d-flex justify-content-center'>
                    <p className='me-4'>Our Courses</p>
                    <p className='me-4'>Services</p>
                    <p className='me-4'>Mentors</p>
                    <p className='me-4'>Contact Us</p>
                </div>
                <div className='mb-4'>
                    <FaFacebook className='text-2xl me-3'></FaFacebook>
                    <FaInstagram className='text-2xl me-3'></FaInstagram>
                    <FaLinkedin className='text-2xl me-3'></FaLinkedin>
                    <FaTwitter className='text-2xl me-3'></FaTwitter>
                </div>
                <small>All rights reserved to Red-Code @2022</small>
            </div>
        </div>
    );
};

export default Footer;