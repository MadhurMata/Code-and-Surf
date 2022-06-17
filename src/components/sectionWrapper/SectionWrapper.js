import React from 'react';

import { Box, Typography } from '@mui/material';

function SectionWrapper({ children, id, title, backgroundColor = 'none' }) {
  return (
    <Box sx={{ padding: '50px 0', backgroundColor: { backgroundColor } }}>
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
