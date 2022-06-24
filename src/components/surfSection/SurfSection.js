import React, { useEffect, useRef } from 'react';

import './styles.css';

import { useIntersection } from 'hooks/useIntersection';

import { Box, List, ListItem, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

function SurfSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const surfSectionStyles = {
    text: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '0 50px',
      marginTop: '50px'
    },
    textSmallDevice: {
      maxWidth: '500px',
      margin: 'auto',
      padding: '0 20px',
      marginTop: '20px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <Box>
      <Box
        id="imageContainerSurfSection"
        sx={matches ? { marginTop: '50px' } : { marginTop: '100px' }}>
        <Box className="overlayTopLayerSurf" sx={matches ? { top: '50px' } : { top: '20px' }}>
          <Typography gutterBottom variant="h6" component="div" align="center" color="#fff">
            Surf experience
          </Typography>
          <hr
            style={{ backgroundColor: '#1976d2', width: '100px', height: '3px', border: 'none' }}
          />
          <Box ref={ref} sx={matches ? surfSectionStyles.text : surfSectionStyles.textSmallDevice}>
            <Typography sx={{ mb: 2 }} color="#fff">
              {`It is not all about coding, enjoy outdors exercise, and have tons of fun, during our surf lessons. Understand the theory behind surfing, practice, practice, and more practice improving your surf skills surrounded by good vibes.`}
            </Typography>
            <List>
              <ListItem sx={{ paddingTop: 0 }}>
                <Typography color="#fff">3 weeks of surf lessons. 50+ hours</Typography>
              </ListItem>
              <ListItem sx={{ paddingTop: 0 }}>
                <Typography color="#fff">Basic surf theory for beginners</Typography>
              </ListItem>
              <ListItem sx={{ paddingTop: 0 }}>
                <Typography color="#fff">Lessons with surf instructor</Typography>
              </ListItem>
              <ListItem sx={{ paddingTop: 0 }}>
                <Typography color="#fff">Surf guiding</Typography>
              </ListItem>
              <ListItem sx={{ paddingTop: 0 }}>
                <Typography color="#fff">Trips to different spots</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className="overlaySurf"></Box>
      </Box>
    </Box>
  );
}

export default SurfSection;
