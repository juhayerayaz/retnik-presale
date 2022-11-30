import React from 'react';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Explainer from './Explainer';

const Home = () => {
    return (
        <>
            <Header />
            <Explainer />
            <Services />
            <Info />
            <Blogs />
        </>
    );
};

export default Home;