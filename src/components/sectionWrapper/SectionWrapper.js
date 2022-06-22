import React from 'react';

import { Box, Typography } from '@mui/material';

function SectionWrapper({ children, id, title }) {
  return (
    <Box
      sx={{
        paddingTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
      <Typography gutterBottom variant="h6" component="div" align="center">
        {title}
      </Typography>
      <hr
        style={{ backgroundColor: '#009be5', width: '100px', height: '3px', border: 'none' }}
        id={id}
      />
      {children}
    </Box>
  );
}

export default SectionWrapper;
