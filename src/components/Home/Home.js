import React, { useContext, useEffect, useState } from 'react';
import './Home.css'
import Blog from '../Blog/Blog'
import { BlogContext } from '../../App';
const Home = () => {
    const [blogs, setBlogs] = useContext(BlogContext)
    useEffect(() => {
        // fetch('https://retro-tech-talks.herokuapp.com/blogs')
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='blogs-container'>
            {
                blogs.map((blog, index) => (
                    <Blog key={index} blog={blog} />
                ))
            }
        </div>
    );
};

export default Home;