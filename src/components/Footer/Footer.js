import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer>
            <Container className='d-flex flex-column flex-column align-items-center my-5'>
                <img src={logo} alt="logo" />
                <div className='d-flex gap-4 my-4'>
                    <Link className='text-decoration-none text-uppercase fs-5 text-dark' to='/home'>Home</Link>
                    <Link className='text-decoration-none text-uppercase fs-5 text-dark' to='/about-me'>About Me</Link>
                    <Link className='text-decoration-none text-uppercase fs-5 text-dark' to='/blogs'>Blogs</Link>
                    <Link className='text-decoration-none text-uppercase fs-5 text-dark' to='/login'>Login</Link>
                    <Link className='text-decoration-none text-uppercase fs-5 text-dark' to='/register'>Register</Link>
                </div>
                <p className="small text-center text-muted mb-0">Jackson Photography &copy; {year}</p>
            </Container>
        </footer>
    );
};

export default Footer;