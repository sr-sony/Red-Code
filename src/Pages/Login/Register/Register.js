import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser, updateUserProfile, verifyEmail,loginInWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        loginInWithGoogle(googleProvider)
        .then(result=>{
            const user = result.user;
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleProfile(name, photoURL)
                form.reset();
                handleVerify();
                toast.success("Please check your email address")
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleProfile = (name, photoURL) => {

        const profile = {
            userName: name,
            photoURL: photoURL,

        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleVerify = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="photo Url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>to our terms and conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Registration
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
            <br></br>
            <ButtonGroup vertical>
                <Button onClick={googleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign In With Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Sign In With GitHub</Button>
            </ButtonGroup>
        </Form>
        
    );
};

export default Registration;