import React from 'react';

const Subscription = () => {
    return (
        <div className='text-center my-28'>
            <h1 className='text-2xl text-primary font-bold mt-7'>Sign Up For The BETA to see more</h1>
            <div className='mt-7'>
                <input type="text" placeholder='Business Name' name="name" id="" className='placeholder:text-purple-300 text-primary rounded-2xl p-2 placeholder:text-center text-center border-purple-300 border-2 focus:outline-purple-600 mr-2' />
                <input type="email" name="email" placeholder='Email' id="" className='placeholder:text-purple-300 text-primary rounded-2xl p-2 placeholder:text-center text-center border-purple-300 border-2 focus:outline-purple-600 ml-2' />
            </div>
            <button className='btn btn-primary rounded-2xl shadow-md shadow-[#00000032] text-white mt-9'>Notify me</button>
            <br />


            <a href="https://retink.io/fap" target='_blank' rel="noreferrer">
                <button className='btn bg-transparent border-primary hover:bg-primary hover:border-0 my-9 rounded-2xl shadow-md shadow-[#00000032] text-[#0085FF] hover:text-white transition duration-700'><p>Signup as a Freelance partner</p></button>
            </a>
        </div>
    );
};

export default Subscription;