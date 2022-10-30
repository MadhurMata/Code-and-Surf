import React, { useEffect, useCallback, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { client } from 'api/contentfulApi';

const BlogSection = ({ deviceType }) => {
  const [isCarouselLoading, setIsCarouselSlide] = useState();
  const [carouselSlides, setCarouselSlides] = useState([]);
  const styledBlog = {
    container: {
      backgroundColor: '#f0efef',
      padding: '32px',
      minHeight: '400px'
    },
    carousel: {
      listStyle: 'none'
    },
    card: {
      margin: '20px'
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

  const ellipsis = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  };

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

    setCarouselSlides(cleanSlides);
  }, []);

  const getBlogs = useCallback(async () => {
    setIsCarouselSlide(true);
    try {
      const response = await (await client.getEntries({ content_type: 'blogPost' })).items;
      if (response) cleanUpCarouselSlides(response);
      else setCarouselSlides([]);
      setIsCarouselSlide(false);
    } catch (error) {
      console.log(error);
      setIsCarouselSlide(false);
    }
  }, [cleanUpCarouselSlides]);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  console.log(carouselSlides);

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
        <h1>LOADINGGGGGG</h1>
      ) : !deviceType ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          keyBoardControl={true}>
          {carouselSlides.map((item) => {
            const { id, slideTitle, slideDescription, slideImage } = item;
            return (
              <Card sx={styledBlog.card} key={id}>
                <CardMedia component="img" height="140" image={slideImage} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {slideTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={ellipsis}>
                    {slideDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button> */}
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
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
          {carouselSlides.map((item) => {
            const { id, slideTitle, slideDescription, slideImage } = item;
            return (
              <Card sx={styledBlog.card} key={id}>
                <CardMedia component="img" height="140" image={slideImage} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {slideTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={ellipsis}>
                    {slideDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button> */}
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          })}
        </Carousel>
      )}
    </Box>
  );
};

export default BlogSection;
