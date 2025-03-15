import React from 'react';

const Footer = () => {
    return (
        <div className='m-5 p-5 bg-stone-200 rounded-lg '>
            <div className='flex justify-center'>
               <a className="link link-hover  ml-5">About us</a>
               <a className="link link-hover  ml-5">Contact</a>
               <a className="link link-hover  ml-5">Jobs</a>
               <a className="link link-hover  ml-5">Press kit</a>
            </div>
            <div className="p-1 border-b border-cyan-500"></div>
            <p className='justify-center flex pt-5'>Copyright © 2025 - All right reserved by Shahriar Islam</p>
        </div>
    );
};

export default Footer;