import React from 'react';
// import cover from '../../assets/images/cover.jpg'
import './Cover.css'

const Cover = () => {
    return (
        <div className='cover-img m-5'>
            <div className='hero-overlay flex items-center h-screen ml-10'>
                <div>
                <h1 className='text-green-400 font-bold text-4xl mb-5'>Discover an exceptional cooking <br /> class tailored for you!</h1>

                <p className='text-xl mb-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>

                <div className=''>
                    <button className="bg-emerald-600 text-black rounded-xl px-6 py-3 font-bold text-lg mr-5">Explore Now</button>

                    <button className="bg-cyan-800 text-white rounded-xl px-6 py-3 font-bold text-lg">Our Feedback</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;