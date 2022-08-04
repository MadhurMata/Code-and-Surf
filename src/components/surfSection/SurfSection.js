import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

import girlCoding from 'assets/images/girl-coding-stack.jpeg';

function SurfSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const surfSectionStyles = {
    text: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '32px'
    },
    textSmallDevice: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '32px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Surf" backgroundColor="#ead1b4">
      <Box>
        <Box ref={ref} sx={matches ? surfSectionStyles.textSmallDevice : surfSectionStyles.text}>
          <Box>
            <img
              style={{ width: '100%', borderRadius: '21px' }}
              src={girlCoding}
              alt="Code on a screen"
            />
          </Box>
          <Typography
            sx={{
              my: 2,
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400'
            }}>
            {`It is not all about coding, enjoy outdors exercise, and have tons of fun, during our surf lessons. Understand the theory behind surfing, practice, practice, and more practice improving your surf skills surrounded by good vibes.`}
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
              <span style={{ fontWeight: 'bold' }}>More than 50 hours</span> with experience
              instructors
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              <span style={{ fontWeight: 'bold' }}>Surf theory and practice.</span>
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              Selection of the <span style={{ fontWeight: 'bold' }}>best spot to surf.</span>
            </li>
            <li style={{ marginLeft: '16px', paddingLeft: '16px' }}>
              <span style={{ fontWeight: 'bold' }}>Surf guiding.</span>
            </li>
          </Box>
        </Box>
        <Box className="overlaySurf"></Box>
      </Box>
    </SectionWrapper>
  );
}

export default SurfSection;
