import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import BlogPost from 'pages/blogPost/BlogPost';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:postTitle/:postId" element={<BlogPost />} />
      {/* <Route path="/:heroName/:heroId" element={<Hero />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
