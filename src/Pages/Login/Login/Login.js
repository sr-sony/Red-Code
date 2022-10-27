import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser,loginInWithGoogle, loginInWithGithub} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const googleSignIn = () =>{
        loginInWithGoogle(googleProvider)
        .then(result=>{
            const user = result.user;
        })
        .catch(error=>{
            console.error(error)
        })
    }


    const githubSignIn = () =>{
        loginInWithGithub(githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            navigate(navigateTo, { replace: true })
        })
        .catch(error => {
            setError (error.message);
        })
    }
    return (
        <>
        <p className='display-6 mt-5 fw-semibold'>Please Log In</p>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name = "email" type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name ="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-3'>
                Login
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
            <br></br>

            <p className='display-6'>Don't have an account? Please Register First</p>

            <Button variant="success" type="submit" className='mt-3'>
                <Link className='text-decoration-none text-light fw-semibold' to='/register'>Register</Link>
            </Button>

            <br></br>
            <p className='display-6 mt-3'>Register or Login using Google or Github</p>

            <ButtonGroup vertical className='mt-3 d-inline-flex flex-row'>
                <div>
                <Button onClick={googleSignIn} className='mb-2' variant="outline-primary"><FaGoogle className='me-2'></FaGoogle>Google</Button>
                </div>
                <div>
                <Button className='mb-2 ms-2' variant="outline-dark" onClick = {githubSignIn}><FaGithub className='me-2'></FaGithub>GitHub</Button>
                </div>
            </ButtonGroup>
        </Form>
        </>
    );
};

export default Login;