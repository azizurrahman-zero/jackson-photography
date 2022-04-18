import React, { useRef } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import weddingL from '../../images/weddingL.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import Loading from '../Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // spinner
    if (loading) {
        return <Loading></Loading>
    }

    // display error
    if (error) {
        const errorMessage = error?.message.substring(22).replace(/[()']+/g, '').replace(/[-']+/g, ' ');
        toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
    }

    // register
    const handleRegister = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <Container className='my-5'>
            <Row className='align-items-center'>
                <Col>
                    <h4 className='fw-bold mb-4 display-6 section-title text-center'>Get started!</h4>
                    <SocialLogin></SocialLogin>
                    <Form onSubmit={handleRegister}>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label="Full Name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Jack Robinson"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputEmail"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                ref={emailRef}
                                type="email"
                                placeholder="name@example.com"
                                required
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                ref={passwordRef}
                                type="password"
                                placeholder="Password"
                                required
                            />
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
            <ToastContainer
                pauseOnFocusLoss={false}
            ></ToastContainer>
        </Container>
    );
};

export default Register;