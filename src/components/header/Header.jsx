import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Link className='navbar-brand' to="/">LOGO</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
              <Link to="/" className='me-2'>Profile</Link>
              <Link to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
};

export default Header;
