import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import Blog from 'pages/blog/blog';
import BlogPost from 'pages/blogPost/BlogPost';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/:postTitle/:postId" element={<BlogPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
