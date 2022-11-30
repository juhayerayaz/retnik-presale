import React from 'react';
import fb from '../../Imgs/Facebook - Original.png'
import twitter from '../../Imgs/Twitter - Original.png'
import insta from '../../Imgs/Insta.png'
import linkedin from '../../Imgs/LinkedIn - Original.png'
import youtube from '../../Imgs/YouTube - Original.png'
import pinterest from '../../Imgs/Pinterest - Original.png'
import logo from '../../Imgs/Logo.png'

const Footer = () => {
    return (
        <div className='bg-[#D0D0D0]'>
            <div className='ml-16 mr-36 pt-20 flex items-center justify-between'>
                <div>
                    <img className='mb-14' src={logo} alt="" />
                    <div className='flex items-center gap-20'>
                        <div>
                            <h1 className='text-2xl font-bold mb-6'>Product by Retink Media UG</h1>
                            <h1 className='text-2xl font-bold'>Bonn, Germany</h1>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-6'>Get Early Access</h1>
                            <h1 className='text-2xl font-bold'>Provide Feedback</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl mb-4'>Connect With Us</h1>
                    <div className='flex items-center gap-6'>
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                        <img src={pinterest} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#000000] h-[118px] mt-10 flex items-center justify-between px-40'>
                <h1 className='text-white text-lg'>Copyright © 2021 Retink</h1>
                <h1 className='text-white text-lg'>Terms Of Services</h1>
            </div>
        </div>
    );
};

export default Footer;