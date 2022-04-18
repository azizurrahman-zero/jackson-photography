import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ar from '../../images/ar.png'

const AboutMe = () => {
    const handleClick = () => {
        window.open("https://www.facebook.com/azizurrahman.zero");
    };
    return (
        <Container className='my-5'>
            <Row className='g-5 align-items-center'>
                <Col xs={5}>
                    <img src={ar} class="img-fluid rounded" alt="ar" />
                </Col>
                <Col>
                    <h3 className='fw-bold display-6 mb-3 section-title'>Azizur Rahman</h3>
                    <p className='description'>My dream is to be a Full Stack Developer. Last year in 2021, I completed my HSC. Now I am trying to study Software Engineering. Besides my studies, I will work as a Web Developer in a reputed company. After completing my study In Saa Allah I will be startup my own IT-based company.</p>
                    <Button onClick={handleClick} className='mt-4 px-3 button'>Facebook</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;