import React from 'react';
import './Header.css'
import profile from '../../assets/images/profile.jpg'
const Header = () => {
    return (
        <div className="header-file justify-between m-5 bg-lime-200 p-1 rounded-lg">
            <h1 className='font-bold text-2xl mt-2'>Recipe Calories</h1>
            
            <div className="flex space-x-4 underline text-green-900 mt-2 font-bold">
                <h3><a href="">Home</a></h3>
                <h3><a href="">Recipes</a></h3>
                <h3><a href="">About</a></h3>
                <h3><a href="">Search</a></h3>
            </div>

            <div className='flex '>
                   <input className='border-2 h-8 bg-gray-100  mr-5 mt-2 rounded-lg' type="search" required placeholder="Search"/>

                <div className='w-7'>
                   <img src={profile} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Header;