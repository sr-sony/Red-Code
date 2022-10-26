import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import img from '../../Assets/Red code(1).png'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch()
  }
    return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <img src={img} alt='' style={{width: "50px", marginRight: "10px", paddingTop: "10px"}}></img>
      <Navbar.Brand><Link to='/'>Red-Code</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/toggle'>Toggle</Link></Nav.Link>
            <Nav.Link><Link to='/user'>User</Link></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>{
          user?.uid ?
          <>
            <span>{user?.displayName}</span>
            <Button variant='light' onClick={handleLogOut}>Log Out</Button>
          </>
          :
          <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          </>
          }
          </Nav.Link>
          <Nav.Link eventKey={2}>
            {
              user?.photoURL ?
              <Image roundedCircle src={user?.photoURL} style={{height: '30px'}}></Image>
              :
              <FaUserAlt></FaUserAlt>
            }
          </Nav.Link>
        </Nav>
        <div className='d-lg-none'>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;