import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import pairProgramingImg from 'assets/images/pair-programing.jpg';

function FirstSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-300px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 'auto',
      padding: '0 50px'
    },
    fistSectionText: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    fistSectionTextSmall: {
      witdh: '100%',
      textAlign: 'center'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <Box ref={ref} sx={sectionsStyles.fistSectionContainer} id={anchorEl}>
      <Box sx={matches ? sectionsStyles.fistSectionTextSmall : sectionsStyles.fistSectionText}>
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
      <Box sx={{ width: '60%' }} display={{ xs: 'none', sm: 'block' }}>
        <img style={{ width: '100%', height: 'auto' }} src={pairProgramingImg} alt="Girl coding" />
      </Box>
    </Box>
  );
}

export default FirstSection;
