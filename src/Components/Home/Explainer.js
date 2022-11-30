import React from 'react';
import explainer from '../../Imgs/Screenshot 2021-10-24 at 14.53 1.png'

const Explainer = () => {
    return (
        <div className='mx-auto w-[50rem] mb-6'>
            <h1 className='text-primary text-center font-bold text-3xl mb-6'>Explainer</h1>
            <img src={explainer} alt="" />
        </div>
    );
};

export default Explainer;