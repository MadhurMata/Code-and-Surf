import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import './styles.css';

import { Box, Typography } from '@mui/material';

function FirstSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px'
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
          <Box sx={sectionsStyles.fistSectionContainer}>
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
    </>
  );
}

export default FirstSection;
