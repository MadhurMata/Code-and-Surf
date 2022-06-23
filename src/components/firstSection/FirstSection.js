import React from 'react';

import './styles.css';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

function FirstSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 50px',
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
      padding: '0 50px'
    }
  };

  return (
    <>
      <Box id="imageContainer">
        <Box className="overlayTopLayer">
          <Box
            sx={
              matches ? sectionsStyles.fistSectionTextSmall : sectionsStyles.fistSectionContainer
            }>
            <Box sx={{ maxWidth: '440px', margin: '0 auto' }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '2rem',
                  lineHeight: 1.2,
                  letterSpacing: '0.03em',
                  color: '#fff'
                }}>
                Become a{' '}
                <span style={{ color: '#009be5', fontWeight: 900, fontSize: '2.5rem' }}>
                  web developer
                </span>{' '}
                & a ocean rider.
              </Typography>
            </Box>
            <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
              <Typography color="#fff" sx={matches ? { mt: 2 } : { ml: 4 }}>
                {`Launch your career as a Web Developer. Code web applications from scratch using the most modern technologies while living unique experiences on the island of Gods, Bali. Learn surfing in paradise.`}
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
