import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';
import { Box, Typography } from '@mui/material';

import pairProgramingImg from 'assets/images/pair-programing.jpg';

function FirstSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 'auto',
      padding: '0 50px'
    },
    fistSectionText: {
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <Box ref={ref} sx={sectionsStyles.fistSectionContainer} id={anchorEl}>
      <Box sx={sectionsStyles.fistSectionText}>
        <Typography
          sx={{ fontWeight: 700, fontSize: '2rem', lineHeight: 1.2, letterSpacing: '0.03em' }}>
          Become a{' '}
          <span style={{ color: '#009be5', fontWeight: 900, fontSize: '2.5rem' }}>
            web developer
          </span>{' '}
          & a ocean rider.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Launch your career as a Web Developer. Code web applications from scratch using the most
          modern technologies while surfing in Bali.
        </Typography>
      </Box>
      <Box sx={{ width: '70%' }}>
        <img style={{ width: '100%', height: 'auto' }} src={pairProgramingImg} alt="Girl coding" />
      </Box>
    </Box>
  );
}

export default FirstSection;
