import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

import surf from 'assets/images/surf.jpeg';

function SurfSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const surfSectionStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'space-between',
      padding: '32px',
      maxWidth: '1400px'
    },
    firstSecContSmallDevices: {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      maxWidth: '500px'
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: '500px',
      paddingRight: '20px'
    },
    textSmallDevice: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '16px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Surf" backgroundColor="#aec3bd">
      <Box
        sx={
          matches
            ? surfSectionStyles.firstSecContSmallDevices
            : surfSectionStyles.fistSectionContainer
        }>
        <Box ref={ref} sx={matches ? surfSectionStyles.textSmallDevice : surfSectionStyles.text}>
          <Typography
            sx={{
              mb: 2,
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400'
            }}>
            {`It is not all about coding! While you are here, enjoy the outdoors exercise, and have tons of fun during our surf and yoga lessons. Learn the theory behind surfing, and practice, practice, practice to improve your surf skills all while surrounded by good vibes.`}
          </Typography>
          <Box
            sx={{
              backgroundColor: 'white !important',
              p: 1,
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400',
              borderRadius: '4px'
            }}>
            <Typography>Surf package:</Typography>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              <span style={{ fontWeight: 'bold' }}>More than 50 hours of coaching</span> with
              experienced instructors
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              <span style={{ fontWeight: 'bold' }}>Surf theory and practice.</span>
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              Selection of the <span style={{ fontWeight: 'bold' }}>best spots to surf.</span>
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              <span style={{ fontWeight: 'bold' }}>Surf guiding.</span>
            </li>
          </Box>
        </Box>
        <Box sx={matches ? { width: '100%' } : { width: '40%' }}>
          <img style={{ width: '100%', borderRadius: '20px' }} src={surf} alt="Code on a screen" />
        </Box>
        <Box className="overlaySurf"></Box>
      </Box>
    </SectionWrapper>
  );
}

export default SurfSection;
