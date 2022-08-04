import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import './styles.css';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

function FirstSection({ anchorEl, setAnchorEl }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px',
      maxWidth: '1400px'
    },
    fistSectionText: {
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    fistSectionTextSmall: {
      textAlign: 'center',
      justifyContent: 'center',
      padding: '32px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);

  return (
    <>
      <Box ref={ref} id="imageContainer">
        <Box className="overlayTopLayer">
          <Box
            sx={
              matches ? sectionsStyles.fistSectionTextSmall : sectionsStyles.fistSectionContainer
            }>
            <Box sx={{ maxWidth: '440px', textAlign: 'start' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '2.2rem',
                  lineHeight: 1.2,
                  letterSpacing: '0.03em',
                  color: '#fff'
                }}>
                <span style={{ color: '#DDC476', fontWeight: 900 }}>Become a web developer</span>{' '}
                while surfing in paradise
              </Typography>
            </Box>
            <Box sx={{ maxWidth: '500px', textAlign: 'start' }}>
              <Typography color="#fff" sx={{ mt: 2, fontSize: '20px' }}>
                {`Launch your career as a Web Developer. Learn from the best to code web applications while living unique experiences on the Island of Gods, Bali.`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="overlay"></Box>
      </Box>
      {/* <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
        <Box id="firstSection" sx={sectionsStyles.fistSectionContainer}>
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
              {`Launch your career as a Web Developer. Code web applications from scratch using the most modern technologies while living unique experiences on the island of Gods, Bali. Learn surfing in paradise.`}
            </Typography>
          </Box>
          <Box sx={{ maxWidth: '50%' }} display={{ xs: 'none', sm: 'block' }}>
            <img
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              src={pairProgramingImg}
              alt="Girl coding"
            />
          </Box>
        </Box>
      </Box> */}
    </>
  );
}

export default FirstSection;
