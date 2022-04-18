import React from 'react';
import { Container } from 'react-bootstrap';
import contact from '../../images/contact.png'

const CheckOut = () => {
    return (
        <Container className='d-flex justify-content-center my-5'>
            <img className='w-50' src={contact} alt="contact" />
        </Container>
    );
};

export default CheckOut;