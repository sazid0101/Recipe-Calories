
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
const Recipe = ({singleRecipe}) => {
    const {recipe_name,preparing_time,calories} = singleRecipe

   

    return (
         <div>
            <div className='flex justify-around my-5 items-center'>
            <div>
                <h3 className='mb-3'>Name</h3>
                <p>{recipe_name}</p>
            </div>
            <div>
                <h3 className='mb-3'>Time</h3>
                <p>{preparing_time}</p>
            </div>
            <div>
                <h3 className='mb-3'>Calories</h3>
                <p>{calories}</p>
            </div>
            <button  className="bg-teal-500 text-white rounded-full px-3 py-2 font-bold text-lg mt-5 ">Preparing</button>
            
        </div>
        <div className=" border-b border-gray-400"></div>
        
         </div>
         
    );
};

export default Recipe;
