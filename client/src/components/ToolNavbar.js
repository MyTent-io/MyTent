import React from "react";
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import {logout} from '../pages/auth/auth'
import './ToolNavbar.css'
import logo from "../images/LOGOMYTENT.png"
const handleLogout = props => {
  console.log(props)
  logout().then(() => {
    props.setUser(null);
  });
}


function ToolNavbar (props) {
  console.log(props.user);
  return (
    <Navbar collapseOnSelect expand="lg"  className="Navbar" >
    <Navbar.Brand href="/" ><img src={logo} className="Logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
    <Navbar.Collapse id="responsive-navbar-nav">
    
      <Nav className="navbarItems" >
      {props.user ? (
        <>
        <div className= "welcomUserTag">
        <h5 style={{fontWeight:900}}>Welcome {props.user.username} </h5>
        </div>
        <div className="navbarTags">
        <Nav.Link href="/myprofile">Profile</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <Nav.Link href="/allPlaces">Created places</Nav.Link>
        <Nav.Link to='/' onClick={() => handleLogout(props)}>Logout</Nav.Link>
        </div>

        </>
        ) : (
        <>
        <Nav.Link href="/signup">Sign Up</Nav.Link>

        <Nav.Link eventKey={2} href="/login"> LogIn </Nav.Link>
        </>
        )}

      </Nav>
    </Navbar.Collapse>
  </Navbar>

   
  );
}

export default ToolNavbar;