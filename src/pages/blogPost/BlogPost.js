import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from 'api/contentfulApi';

import { Typography, Box } from '@mui/material';

const BlogPost = () => {
  const params = useParams();
  //const [isPostLoading, setIsPostLoading] = useState();
  const [post, setPost] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const { fields } = rawData;
    const title = fields.title;
    const description = fields.description;
    const image = fields.image.fields.file.url;
    const updatedSlide = { title, description, image };

    setPost(updatedSlide);
  }, []);

  const getBlogs = useCallback(async () => {
    // setIsCarouselLoading(true);
    try {
      const response = await await client.getEntry(params.postId);
      if (response) cleanUpCarouselSlides(response);
      else setPost({});
      //setIsCarouselLoading(false);
    } catch (error) {
      console.log(error);
      //   setIsCarouselSlide(false);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '2.2rem',
          lineHeight: 1.2,
          letterSpacing: '0.03em'
        }}>
        {post.title}
      </Typography>
      <Box sx={{ width: '100%' }}>
        <img style={{ width: '100%' }} src={post.image} alt="Code on a screen" />
      </Box>
      <Typography
        sx={{
          mb: 2,
          fontSize: '18px',
          lineHeight: '150%',
          fontWeight: '400'
        }}>
        {post.description}
      </Typography>
    </Box>
  );
};

export default BlogPost;
