import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import wedding from '../../images/wedding.png';

const Login = () => {
    return (
        <Container className='my-5'>
            <Row className='align-items-center'>
                <Col xs={7}>
                    <img className='w-100' src={wedding} alt="sider" />
                </Col>
                <Col>
                    <h4 className='fw-bold mb-3 section-title'>Get started with Jackson Photography!</h4>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button className='px-3 d-block w-100 mt-4 button'>Book Now</Button>
                    <small className='d-block mt-3 text-center'>By continuing you indicate that you read and agreed to the Terms of Use</small>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;