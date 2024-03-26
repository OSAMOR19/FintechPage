import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    const gradientBackgroundStyle = {
        background: "linear-gradient(90deg, #0E0D13 0%, #1D2339 100%)",
        // Add any other styles you want
      };
  return (
    <>
    <Navbar  data-bs-theme="dark"  style={gradientBackgroundStyle}>
        <Container>
          <Navbar.Brand href="#home">PAYSTREAM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;