import React from 'react';
import { Box, Typography } from '@mui/material';

import madhur from 'assets/images/staff/DSCF0976.jpg';

function StaffCard() {
  const styledStaffCard = {
    cardContainer: {
      margin: '20px',
      width: '300px',
      height: '100%'
    },
    imageContainer: {
      width: '100%',
      height: '250px'
    },
    textContainer: {
      margin: 'none'
    }
  };

  return (
    <Box sx={styledStaffCard.cardContainer}>
      <Box sx={styledStaffCard.imageContainer}>
        <img style={{ width: '100%', height: 'auto' }} src={madhur} alt="Code on a screen" />
      </Box>
      <Box sx={styledStaffCard.textContainer}>
        <Typography gutterBottom variant="h6" component="div">
          Marta Garcia
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary" component="div">
          Marketing social media
        </Typography>
      </Box>
    </Box>
  );
}

export default StaffCard;
