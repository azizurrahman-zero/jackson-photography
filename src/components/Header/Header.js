import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    // sign out
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Link to='/' className="logo navbar-brand">
                        <img className='logo-image' src={logo} alt="logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/about">About Me</Link>
                            <Link className='nav-link' to="/blogs">Blogs</Link>
                        </Nav>
                        {
                            user ?
                                <Button onClick={handleSignOut} className='px-3 button'>Sign Out</Button>
                                :
                                <Nav>
                                    <Link className='nav-link' to="/login">Login</Link>
                                    <Link className='nav-link' to="/register">Register </Link>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;