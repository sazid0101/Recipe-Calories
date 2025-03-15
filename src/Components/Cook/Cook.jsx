import React from 'react';
import Recipe from '../Recipe/Recipe';

const Cook = ({cook}) => {
    return (
        <div className='md: w-1/3 bg-gray-200 m-5 rounded-2xl'>
            <h1 className='text-2xl font-bold justify-center flex mt-2'>Want to cook: {cook.length}</h1>
            <div className="p-2 border-b border-gray-400"></div>
            {
                cook.map(singleRecipe =><Recipe singleRecipe={singleRecipe}></Recipe>)
            }
        </div>
    );
};

export default Cook;