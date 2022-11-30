import React from 'react';
import ai from "../../Imgs/artificial-intelligence-svgrepo-com 1.png"
import identity from "../../Imgs/Group.png"
import info from '../../Imgs/Vector.png'
import reviews from '../../Imgs/direct-customer-svgrepo-com 1.png'
import progress from '../../Imgs/Vector (1).png'

const Services = () => {
    return (
        <div className='mx-36 my-16'>
            <div className='grid grid-cols-3'>
                <div className='card shadow-lg h-[428px] w-[360px] p-10 items-center'>
                    <img src={ai} alt="" className='w-[78px]' />
                    <h1 className='text-xl font-bold my-5'>MakeAI-assisted Content Choices</h1>
                    <p className='text-sm'>Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.</p>
                </div>
                <div className='card shadow-lg h-[428px] w-[360px] p-10 items-center'>
                    <img src={identity} alt="" className='w-[78px]' />
                    <h1 className='text-xl font-bold my-5'>Upload and Maintain your Brand Identity</h1>
                    <p className='text-sm'>Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!</p>
                </div>
                <div className='card shadow-lg h-[428px] w-[360px] p-10 items-center'>
                    <img src={info} alt="" className='w-[78px]' />
                    <h1 className='text-xl font-bold my-5'>Be informed as we create</h1>
                    <p className='text-sm'>Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</p>
                </div>
            </div>
            <div className='w-[820px] mx-auto flex items-center mt-20'>
                <div className='card shadow-lg h-[428px] w-[360px] p-10 items-center mr-20'>
                    <img src={reviews} alt="" className='w-[78px]' />
                    <h1 className='text-xl font-bold my-5'>Receive and Review</h1>
                    <p className='text-sm'>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                </div>
                <div className='card shadow-lg h-[428px] w-[360px] p-10 items-center'>
                    <img src={progress} alt="" className='w-[78px]' />
                    <h1 className='text-xl font-bold my-5'>Publish and Monitor your contents’ progress</h1>
                    <p className='text-sm'>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;