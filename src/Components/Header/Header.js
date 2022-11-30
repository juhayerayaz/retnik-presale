import logo from '../../Imgs/Logo.png'
import mascot from '../../Imgs/Retink-avatar (1) 1.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='ml-32 mt-14'>
                <img src={logo} alt="" />
            </div>
            <div className='flex pl-32'>
                <div className=''>
                    <div>
                        <div className='flex items-center mr-5 mt-16 mb-10'>
                            <p className='text-4xl font-bold'>Get Advanced AI
                                <br /> + Expert Created</p>
                            <p className='text-3xl font-bold text-primary ml-5'>Logos</p>
                        </div>
                        <p className='boosting w-[600px] mb-5'>Boost your sales 10x faster with content customized by our unique partnership of human creativity and AI optimization</p>
                    </div>
                    <div>
                        <h1 className='text-xl text-primary font-bold'>Sign Up For The BETA!</h1>
                        <p> <input type="text" name="name" id="" placeholder='User Name' className='my-5 border border-t-0 border-x-0 border-b-2 border-black placeholder:text-center placeholder:text-primary focus:outline-none focus:text-center focus:text-primary' /> would like a beta invite sent to <input type="email" name="email" id="" placeholder='Email' className='my-5 border border-t-0 border-x-0 border-b-2 border-black placeholder:text-center placeholder:text-primary focus:outline-none focus:text-center focus:text-primary' /> when it’s ready!</p>
                        <div className='my-6'>
                            <button className='btn btn-primary rounded-2xl shadow-md shadow-[#00000032] text-white'>Notify me</button>
                            <button className='btn bg-transparent border-primary hover:bg-primary hover:border-0 ml-20 rounded-2xl shadow-md shadow-[#00000032] text-[#0085FF] hover:text-white'><p>Signup as a Freelance partner</p></button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-[570px] mt-[-7rem]' src={mascot} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;