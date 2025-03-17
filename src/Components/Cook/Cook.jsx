// import React, { useState } from 'react';
import Recipe from '../Recipe/Recipe';
// import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Cook = ({cook}) => {
    // // const [currentCooking, setCurrentCooking] = useState([])
    // // const currentCookingHandle = (item) =>{
    // //     const newCurrentCooking = [...currentCooking,item]
    // //     console.log(newCurrentCooking)
    // }
    return (
        <div className='md: w-1/3 bg-gray-200 m-5 rounded-2xl'>
            <h1 className='text-2xl font-bold justify-center flex mt-2'>Want to cook: {cook.length}</h1>
            <div className="p-2 border-b border-gray-400"></div>
            {
                cook.map((singleRecipe,idx ) =><Recipe
                 singleRecipe={singleRecipe} 
                //  currentCookingHandle={currentCookingHandle}
                //   currentCooking={currentCooking}
                   key={idx}></Recipe>)
            }
            
        </div>
    );
};

export default Cook;