import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand className="logo" href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="/about-me">About Me</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                        </Nav>
                        {
                            user ?
                                <Button onClick={handleSignOut} className='px-3 button'>Sign Out</Button>
                                :
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/register">Register </Nav.Link>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;