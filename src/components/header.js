import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BellFill, Person } from 'react-bootstrap-icons';
import logo from '../assets/images/influencer.png';
import classes from './header.module.css';

const Header = () =>{
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home"> <img src={logo} alt="influencer logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className={`me-5 ${classes.navLinks}`}>
                <Nav.Link href="#home" className="activeLink">My Campaign</Nav.Link>
                <Nav.Link href="#past">Past Campaign</Nav.Link>
                <Nav.Link href="#account">Account</Nav.Link>
            </Nav>
            
            <Nav>
                <Nav.Link href="#link"><BellFill /></Nav.Link>
                <Nav.Link href="#link">Hi Sudarshan!</Nav.Link>
                <NavDropdown title={<Person/>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header;