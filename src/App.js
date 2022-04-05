import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </BlogContext.Provider>

  );
}

export default App;
