import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import google from '../../icons/google.png'
import facebook from '../../icons/facebook.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SocialLogin.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();

    if (googleUser || facebookUser) {
        navigate(from, { replace: true });
    }

    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }

    if (googleError) {
        const errorMessage = googleError.message.substring(22).replace(/[()']+/g, '').replace(/[-']+/g, ' ');
        toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
    }

    if (facebookError) {
        const errorMessage = facebookError.message.substring(22).replace(/[()']+/g, '').replace(/[-']+/g, ' ');
        toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1))
    }

    return (
        <div>
            <Container className='d-flex justify-content-center gap-3 mb-5'>
                <Button onClick={() => signInWithGoogle()} variant="white" className='px-4 py-2 social-button'><img className='me-2' src={google} alt='google' />Google</Button>
                <Button onClick={() => signInWithFacebook()} variant="white" className='px-4 py-2 social-button'><img className='me-2' src={facebook} alt='facebook' />Facebook</Button>
            </Container>
            <Row className='d-flex align-items-center mb-4'>
                <Col className='line'></Col>
                <Col className='p-0 d-flex justify-content-center'>
                    <small className='text-center'>Or continue with</small>
                </Col>
                <Col className='line'></Col>
            </Row>
            <ToastContainer
                pauseOnFocusLoss={false}
            ></ToastContainer>
        </div>
    );
};

export default SocialLogin;