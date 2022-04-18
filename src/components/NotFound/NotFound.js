import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <Container className='d-flex flex-column align-items-center justify-content-center my-5'>
            <h3 className='fw-bold display-4 mb-3 section-title'>404 Not Found!</h3>
            <img className='w-75' src={notfound} alt="notfound" />
            <Link to='/login' className='text-decoration-none d-inline-block mt-4'>
                <Button className='px-3 button'>Back to Homepage</Button>
            </Link>
        </Container>
    );
};

export default NotFound;