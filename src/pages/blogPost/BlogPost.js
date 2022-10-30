import React from 'react';
import { Typography, Box } from '@mui/material';
import girlCoding from 'assets/images/surf.jpeg';

const BlogPost = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '2.2rem',
          lineHeight: 1.2,
          letterSpacing: '0.03em'
        }}>
        fhgjhgkjkjhgchjhjkjjgvghcv gjhghj
      </Typography>
      <Box sx={{ width: '100%' } }>
        <img style={{ width: '100%' }} src={girlCoding} alt="Code on a screen" />
      </Box>
      <Typography
        sx={{
          mb: 2,
          fontSize: '18px',
          lineHeight: '150%',
          fontWeight: '400'
        }}>
        {`It is not all about coding! While you are here, enjoy the outdoors exercise, and have tons of fun during our surf and yoga lessons. Learn the theory behind surfing, and practice, practice, practice to improve your surf skills all while surrounded by good vibes.`}
      </Typography>
    </Box>
  );
};

export default BlogPost;
