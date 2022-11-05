import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TreesContext } from 'App';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import Loader from 'components/loader/Loader';
import PostCard from 'components/postCard/PostCard';

const BlogSection = ({ deviceType }) => {
  const [posts] = useContext(TreesContext);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);

  const styledBlog = {
    container: {
      backgroundColor: '#F2F3F4',
      padding: '32px',
      minHeight: '400px'
    },
    carousel: {
      listStyle: 'none'
    },
    title: {
      color: 'white'
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

  return (
    <Box sx={styledBlog.container}>
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
        Blog
      </Typography>
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
  );
};

export default BlogSection;
