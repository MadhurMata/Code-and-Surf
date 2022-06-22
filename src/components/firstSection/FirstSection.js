import React from 'react';

import './styles.css';

import { Box, Typography } from '@mui/material';

import pairProgramingImg from 'assets/images/codding-class.jpeg';

function FirstSection() {
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
      textAlign: 'center',
      justifyContent: 'center',
      padding: '0 50px'
    }
  };

  return (
    <>
      <Box display={{ sm: 'block', md: 'none' }}>
        <Box id="imageContainer">
          <div className="overlayTopLayer">
            <Box sx={sectionsStyles.fistSectionTextSmall}>
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
          </div>
          <div className="overlay"></div>
        </Box>
        <Box sx={{ margin: '50px 50px 0', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '1.2rem', lineHeight: 1.2, letterSpacing: '0.02em' }}>
            Launch your career as a Web Developer. Code web applications from scratch using the most
            modern technologies while surfing in Bali.
          </Typography>
        </Box>
      </Box>
      <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
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
              Launch your career as a Web Developer. Code web applications from scratch using the
              most modern technologies while surfing in Bali.
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
      </Box>
    </>
  );
}

export default FirstSection;
