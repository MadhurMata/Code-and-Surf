import React, { useEffect, useCallback, useState, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from 'api/contentfulApi';

import AppRoutes from 'routes/AppRoutes';
// import NotFound from 'pages/notFound/NotFound';

export const TreesContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideImage = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideImage };
      return updatedSlide;
    });

    setPosts(cleanSlides);
  }, []);

  const getBlogs = useCallback(async () => {
    try {
      const response = await (await client.getEntries({ content_type: 'blogPost' })).items;
      if (response) cleanUpCarouselSlides(response);
      else setPosts([]);
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpCarouselSlides]);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <TreesContext.Provider value={[posts]}>
      <Router>
        <AppRoutes />
      </Router>
    </TreesContext.Provider>
  );
}

export default App;
