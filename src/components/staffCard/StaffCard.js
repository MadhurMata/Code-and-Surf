import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import madhur from 'assets/images/staff/co-founder.jpeg';

function StaffCard() {
  const styledStaffCard = {
    cardContainer: {
      margin: '20px',
      height: '100%'
    },
    imageContainer: {
      width: '100%',
      height: '250px'
    },
    textContainer: {
      margin: 'none'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '20px',
      width: '300px',
      backgroundColor: '#D19560',
      boxShadow: 'none',
      borderRadius: '20px'
    },
    image: {
      height: '100%',
      width: '300px'
    }
  };

  return (
    // <Box sx={styledStaffCard.cardContainer}>
    //   <Box sx={styledStaffCard.imageContainer}>
    //     <img
    //       style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
    //       src={madhur}
    //       alt="Code on a screen"
    //     />
    //   </Box>
    //   <Box sx={styledStaffCard.textContainer}>
    //     <Typography gutterBottom variant="h6" component="div">
    //       Marta Garcia
    //     </Typography>
    //     <Typography gutterBottom variant="body2" color="text.secondary" component="div">
    //       Marketing social media
    //     </Typography>
    //   </Box>
    // </Box>
    <Card sx={styledStaffCard.card}>
      <CardMedia sx={styledStaffCard.image} component="img" image={madhur} alt="Co-founder" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {'Madhur Mata'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'CO-FOUNDER'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StaffCard;
