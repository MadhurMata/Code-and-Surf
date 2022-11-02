import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from 'api/contentfulApi';

import { Typography } from '@mui/material';
import { Header } from 'components/Header/Header';
import { Box } from '@mui/system';

const BlogPost = () => {
  const params = useParams();
  //const [isPostLoading, setIsPostLoading] = useState();
  const [post, setPost] = useState([]);

  const blogStyle = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'max-content',
      gridColumnGap: '0px',
      gridRowGap: '0px',
      minHeight: '100vh'
    },
    contentContainer: {
      width: '100%',
      padding: '2rem 2rem 0',
      backgroundColor: '#ead1b4'
    },
    imageContainer: {
      width: '100%',
      minHeight: '300px',
      backgroundImage: `url(${post.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };

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
    <Box sx={blogStyle.container}>
      <Box>
        <Header />
      </Box>
      <Box sx={blogStyle.imageContainer}></Box>
      <Box sx={blogStyle.contentContainer}>
        <Typography
          sx={{
            margin: '2rem',
            fontWeight: 400,
            fontSize: '2.2rem',
            lineHeight: 1.2,
            letterSpacing: '0.03em'
          }}>
          {post.title}
        </Typography>
        <Typography
          sx={{
            margin: '2rem',
            fontSize: '18px',
            lineHeight: '150%',
            fontWeight: '400'
          }}>
          {post.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogPost;
