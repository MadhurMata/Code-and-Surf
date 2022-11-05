import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostCard = ({ item }) => {
  let navigate = useNavigate();

  const { id, slideTitle, slideDescription, slideImage } = item;

  const styledBlog = {
    card: {
      margin: '20px'
    }
  };

  const ellipsis = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  };

  const handleNavigate = (slideTitle, id) => {
    navigate(`/${slideTitle}/${id}`);
  };
  return (
    <Card sx={styledBlog.card} key={id} onClick={() => handleNavigate(slideTitle, id)}>
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
};

export default PostCard;
