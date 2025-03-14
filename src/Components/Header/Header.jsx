import React from 'react';
import './Header.css'
import profile from '../../assets/images/profile1.jpg'
import logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <div className="header-file justify-between m-5 bg-lime-200 p-1 rounded-lg">
            <div className='flex'>
                <img className='w-12 h-auto' src={logo} alt="" />
                <h1 className=' text-green-900 font-bold text-2xl mt-2'>Recipe Calories</h1>
            </div>
            
            <div className="flex space-x-5 underline text-green-900 mt-2 font-bold">
                <h3 className='hover:scale-110 hover:text-purple-900'><a href="">Home</a></h3>
                <h3 className='hover:scale-110 hover:text-sky-500'><a href="">Recipes</a></h3>
                <h3 className='hover:scale-110 hover:text-teal-600'><a href="">About</a></h3>
                <h3 className='hover:scale-110 hover:text-blue-700'><a href="">Search</a></h3>
            </div>

            <div className='flex '>
                   <input className=' h-8 bg-gray-100  mr-2 mt-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 pl-2' type="search" required placeholder="Search"/>

                <div className='w-11 h-auto'>
                   <img src={profile} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Header;