import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='my-5 banner-section'>
            <Container className='d-flex justify-content-between align-items-center'>
                <div className='w-50'>
                    <h3 className='fw-bold display-6 mb-3 section-title'>Capture your moment with Me!</h3>
                    <p className='mb-4 banner-description'>A professional photoshoot for your wedding is essential to keep memories alive through the years. Keep remembering the best moments in life by me.</p>
                    <div className='position-relative'>
                        <div className='d-flex align-items-center gap-2'>
                            <div>
                                <h1 style={{ fontSize: '130px' }} className='m-0 fw-bolder colored-text'>25</h1>
                            </div>
                            <div>
                                <h2 className='fs-1 fw-bolder offer-text'>%</h2>
                                <h2 className='fs-1 fw-bolder offer-text'>OFF</h2>
                            </div>
                        </div>
                        <small style={{ bottom: '10px', left: '6px' }} className='position-absolute'>*On all wedding packages</small>
                    </div>
                    <Link to='/login' className='text-decoration-none d-inline-block mt-4'>
                        <Button className='px-3 button'>Book Now</Button>
                    </Link>
                </div>
                <div className='w-50'>
                    <img className='w-100' src={banner} alt="banner" />
                </div>
            </Container>
        </div>
    );
};

export default Banner;