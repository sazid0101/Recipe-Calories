import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = ({handleCook}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("Recipe.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
        // console.log(data)
    },[])
    return (
        <div className='md:w-2/3 grid grid-cols-2 gap-2'>
            {
                blogs.map((blog, idx) => <Blog blog ={blog} handleCook={handleCook} key={idx}></Blog>)
            }
        </div>
    );
};

export default Blogs;