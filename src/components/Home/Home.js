import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Services></Services>
        </div>
    );
};

export default Home;