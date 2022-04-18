import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import weddingL from '../../images/weddingL.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <Container className='my-5'>
            <Row className='align-items-center'>
                <Col>
                    <h4 className='fw-bold mb-3 section-title'>Get started with Jackson Photography!</h4>
                    <SocialLogin></SocialLogin>
                    <Form onSubmit={handleRegister}>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Full Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name='name' placeholder="Jack Robinson" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputEmail"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name='email' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </FloatingLabel>
                        <Button className='px-3 d-block w-100 mt-4 button' type='submit'>Register</Button>
                    </Form>
                    <small className='d-block mt-3 text-center'>By continuing you indicate that you read and agreed to the Terms of Use</small>
                    <p className='font-weight-light text-center mt-5 optional-text'>Have an account? <Link to='/login' className='text-decoration-none optional-link'>Login!</Link></p>
                </Col>
                <Col xs={7}>
                    <img className='w-100' src={weddingL} alt="weddingL" />
                </Col>

            </Row>
        </Container>
    );
};

export default Register;