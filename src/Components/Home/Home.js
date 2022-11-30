import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import Explainer from './Explainer';

const Home = () => {
    return (
        <>
            <Header />
            <Explainer />
            <Services />
            <Info />
            <Blogs />
            <Subscription />
            <Footer />
        </>
    );
};

export default Home;