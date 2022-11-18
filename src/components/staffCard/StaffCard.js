import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import madhur from 'assets/images/staff/DSCF0976.jpg';

function StaffCard() {
  const styledStaffCard = {
    cardContainer: {
      margin: '20px',
      height: '100%',
      borderRadius: '10px'
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
      minWidth: '300px',
      backgroundColor: '#ead1b4',
      boxShadow: 'none',
      borderRadius: '20px'
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
      <CardMedia component="img" height="220" image={madhur} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {'Madhur Mata'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'Co-Founder'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StaffCard;
