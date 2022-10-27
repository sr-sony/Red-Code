import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import img from '../../Assets/Red code(1).png'
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch()
  }
    return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <img src={img} alt='' style={{width: "50px", marginRight: "10px", paddingTop: "10px"}}></img>
      <Navbar.Brand><Link to='/' style={{textDecoration: "none", fontSize: "24px", fontWeight: "bold", color: "black"}}>Red-Code</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link to='/home' style={{textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "black"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/courses' style={{textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "black"}}>Courses</Link></Nav.Link>
            <Nav.Link><Link to='/faq' style={{textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "black"}}>FAQ</Link></Nav.Link>
            <Nav.Link><Link to='/toggle' style={{textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "black"}}>Toggle</Link></Nav.Link>
            <Nav.Link><Link to='/user' style={{textDecoration: "none", fontSize: "18px", fontWeight: "bold", color: "black"}}>User</Link></Nav.Link>
        </Nav>
        <Nav>
        <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={50}
      className='mt-3 mx-2'
    />
          <Nav.Link>{
          user?.uid ?
          <>
            {/* <span>{user?.displayName}</span> */}
            <Button variant='danger' className='fw-semibold' onClick={handleLogOut}>Log Out</Button>
          </>
          :
          <>
          <Button variant='warning'><Link className='text-decoration-none text-white fw-semibold' to='/login'>Login</Link></Button>
          </>
          }
          </Nav.Link>
          <Nav.Link eventKey={2} className='mx-2'>
            {
              user?.photoURL ?
              <Image roundedCircle src={user?.photoURL} style={{height: '40px'}} title={user?.displayName ? user?.displayName : user?.email}></Image>
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