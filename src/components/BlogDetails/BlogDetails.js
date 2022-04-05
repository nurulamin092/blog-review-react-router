import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs'
import './BlogDetails.css'
import { BlogContext } from '../../App';
const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    /*   const [blog, setBlog] = useState({});
      useEffect(() => {
          fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
              .then(res => res.json())
              .then(data => setBlog(data))
      }, [id]) */
    const [blogs] = useContext(BlogContext)
    const blog = blogs.find(blog => blog._id == id);
    console.log(blog);
    return (
        <>
            <div className='header-gradient' />

            <div>
                <button className='back-button' onClick={() => navigate(-1)}>
                    <BsChevronLeft />
                    <p>Back</p>
                </button>
                <div className='blog-details'>
                    <div className='blog-image'>
                        <img src={blog?.imageURL} alt="" />
                    </div>
                    <h1>{blog?.title}</h1>
                    <p>{blog?.blog}</p>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;