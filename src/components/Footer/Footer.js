import React from 'react';

import { Box, Typography } from '@mui/material';

function Footer() {
  const footerStyles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eae9e9',
      width: '100%',
      minHeight: '100px'
    }
  };
  return (
    <Box sx={footerStyles.wrapper}>
      <Box></Box>
      <Typography>Privacy</Typography>
    </Box>
  );
}

export default Footer;
