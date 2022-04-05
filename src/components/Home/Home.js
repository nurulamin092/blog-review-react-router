import React, { useEffect, useState } from 'react';
import './Home.css'
import Blog from '../Blog/Blog'
const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
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