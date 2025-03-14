import React from 'react';

const Blog = ({blog}) => {
    const {recipe_img,recipe_id, recipe_name, short_description } = blog;
    return (
        <div className='w-100 border-2 p-5 m-5 rounded-2xl bg-slate-100 shadow-xl'>
            <img className='rounded-lg' src={recipe_img} alt="" />
            <h1>{recipe_name}</h1>
            <p>{short_description}</p>
            <div className="p-4 border-b border-gray-400"></div>
            <h3>Ingredients:</h3>

            <button className="bg-teal-500 text-white rounded-full px-5 py-2 font-bold text-lg">Want to Cook</button>
        </div>
    );
};

export default Blog;