import React from 'react';

import { Box, Typography } from '@mui/material';

function SectionWrapper({ children, title, backgroundColor = 'none' }) {
  return (
    <Box
      sx={{
        paddingTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: { backgroundColor }
      }}>
      <Typography
        gutterBottom
        sx={{ mb: '0', fontSize: '20px', fontWeight: 'bold', lineHeight: '100%' }}
        component="div"
        align="center">
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default SectionWrapper;
