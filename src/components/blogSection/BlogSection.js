import React, { useContext, useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TreesContext } from 'App';

import { Box, Button, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import Loader from 'components/loader/Loader';
import PostCard from 'components/postCard/PostCard';
import { useIntersection } from 'hooks/useIntersection';

const BlogSection = ({ deviceType, anchorEl, setAnchorEl }) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const [posts] = useContext(TreesContext);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);

  const styledBlog = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#ead1b4',
      padding: '32px',
      minHeight: '400px'
    },
    title: {
      color: 'white'
    },
    webButton: {
      width: 'fit-content',
      marginTop: '16px',
      color: 'black',
      fontWeight: 'bold'
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  useEffect(() => {
    if (posts) setIsCarouselLoading(false);
  }, [posts]);

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);

  return (
    <Box sx={styledBlog.container} ref={ref}>
      <Box>
        <Typography
          gutterBottom
          sx={{
            mb: '0',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '100%'
          }}
          component="div"
          align="center">
          Blog posts
        </Typography>
      </Box>
      <Box>
        {isCarouselLoading ? (
          <Loader />
        ) : !deviceType ? (
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            keyBoardControl={true}>
            {posts?.map((item) => {
              return <PostCard key={item.id} item={item} />;
            })}
          </Carousel>
        ) : (
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['mobile']}
            deviceType="mobile"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {posts?.map((item) => {
              return <PostCard key={item.id} item={item} />;
            })}
          </Carousel>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link sx={{ textDecoration: 'none' }} href="/blog">
          <Button variant="contained" sx={styledBlog.webButton}>
            Check more articles
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogSection;
