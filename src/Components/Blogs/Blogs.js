import React from 'react';
import lens from '../../Imgs/unsplash_6TeIOdNnMaM.png'
import laptop from '../../Imgs/unsplash_HOrhCnQsxnQ.png'
import codes from '../../Imgs/unsplash_I6wCDYW6ij8.png'
import writer from '../../Imgs/unsplash_MrWOCGKFVDg.png'
import logo from '../../Imgs/unsplash_niUkImZcSP8.png'
import phone from '../../Imgs/unsplash_QRKJwE6yfJo.png'

const Blogs = () => {
    return (
        <div className='grid grid-cols-3 mx-80 gap-y-11 my-24'>
            <div>
                <img src={logo} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Logos</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'>Have a unique & creative logo designed to express and represent your brand identity.</p>
            </div>
            <div>
                <img src={laptop} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Blog Writing</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'> Write SEO enriched blog posts as long or short articles on any topic of your choice .
                </p>
            </div>
            <div>
                <img src={codes} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Animated Videos</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'>Bring animated characters to life to keep your viewers engaged and  entertained.</p>
            </div>
            <div>
                <img src={lens} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Product Demo</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'>Introduce your product to potential customers in a clear and creative video.</p>
            </div>
            <div>
                <img src={writer} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Copywriting</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'>Have creative and compelling copies written to boost your product, brand, service or company.</p>
            </div>
            <div>
                <img src={phone} className='' alt="" />
                <h1 className='text-lg mt-3 mb-1 transition duration-500 hover:translate-x-12'>Social Media ADs</h1>
                <div className='divider bg-primary h-2 mb-8 w-[80px]'></div>
                <p className='w-[253px]'>Boost sales and awareness with tailor made ads from experts.</p>
            </div>
        </div>
    );
};

export default Blogs;