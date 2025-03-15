import React from 'react';
import { BiAlarm } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";

const Blog = ({blog}) => {
    const {recipe_img,recipe_id, recipe_name, short_description,ingredient,preparing_time,calories } = blog;
    return (
        <div className='w-100 border-2 p-5 m-5  rounded-2xl bg-slate-100 shadow-xl'>
            <img className='rounded-lg' src={recipe_img} alt="" />
            <p className='mt-2'>Recipe Id: {recipe_id}</p>
            <h1 className='text-xl font-bold'>{recipe_name}.</h1>
            <p>{short_description}</p>
            <div className="p-2 border-b border-gray-400"></div>
            <h3 className='font-bold'>Ingredients: {ingredient.length}</h3>

            {
                ingredient.map(item => <ul><li>• {item}</li></ul>)
            }
            <div className="p-2 border-b border-gray-400"></div>

            <div className='flex justify-between mt-1'>
                <div className='flex items-center'>
                    <BiAlarm></BiAlarm> 
                    <p className='pl-2'>{preparing_time} minutes</p>
                </div>
                <div className='flex items-center'>
                    <RiFireLine></RiFireLine>
                    <p className='pl-2'>{calories} calories</p>
                </div>
            </div>

            <button className="bg-teal-500 text-white rounded-full px-5 py-2 font-bold text-lg mt-5">Want to Cook</button>
        </div>
    );
};

export default Blog;