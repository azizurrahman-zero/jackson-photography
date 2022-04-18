import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import weddingR from '../../images/weddingR.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        const errorMessage = error.message.substring(22).replace(/[\(\)']+/g, '').replace(/[\-']+/g, ' ');
        toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email Sent!');
        }
        else {
            toast.error('Please, Enter a Email Address.');
        }
    }
    return (
        <Container className='my-5'>
            <Row className='align-items-center'>
                <Col xs={7}>
                    <img className='w-100' src={weddingR} alt="weddingR" />
                </Col>
                <Col>
                    <h4 className='fw-bold mb-3 section-title'>Welcome Back</h4>
                    <SocialLogin></SocialLogin>
                    <Form onSubmit={handleSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control ref={emailRef} type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </FloatingLabel>
                        <div className='d-flex justify-content-between mt-2'>
                            <p className='text-danger'>{errorMessage}</p>
                            <Button onClick={handleResetPassword} className='border-0 text-decoration-none p-0 custom-button' variant="link">Recover Password</Button>
                        </div>
                        <Button className='px-3 d-block w-100 mt-4 button' type='submit'>Login</Button>
                    </Form>
                    <p className='font-weight-light text-center mt-5 optional-text'>Don't have an account? <Link to='/register' className='text-decoration-none optional-link'>Register!</Link></p>
                </Col>
            </Row>
            <ToastContainer
                pauseOnFocusLoss={false}
            ></ToastContainer>
        </Container>
    );
};

export default Login;