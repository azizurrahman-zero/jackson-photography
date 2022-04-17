import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png'
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='my-5 banner-section'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <div className='w-50'>
                        <h3 className='fw-bold display-6 mb-3 banner-title'>Capture your moment with Me!</h3>
                        <p className='mb-4 banner-description'>A professional photoshoot for your wedding is essential to keep memories alive through the years. Keep remembering the best moments in life by me.</p>
                        <div className='d-flex align-items-center gap-2'>
                            <div>
                                <h1 style={{ fontSize: '130px' }} className='offer-text'>25</h1>
                            </div>
                            <div>
                                <h2 className='fs-1 offer-text'>%</h2>
                                <h2 className='fs-1 offer-text'>OFF</h2>
                            </div>
                        </div>
                        <small>*On all wedding packages</small>
                        <Link to='/login' className='text-decoration-none'>
                            <Button className='d-block mt-4 px-3 button'>Book Now</Button>
                        </Link>
                    </div>
                    <div className='w-50'>
                        <img className='w-100' src={banner} alt="banner" />
                    </div>
                </Container>
            </section>
            <Services></Services>
        </div>
    );
};

export default Home;