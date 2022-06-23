import React, { useEffect, useRef } from 'react';

import './styles.css';

import { useIntersection } from 'hooks/useIntersection';

import { Box, List, ListItem, Typography } from '@mui/material';

import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

function SurfSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <Box id={anchorEl}>
      <Box id="imageContainerSurfSection">
        <Box className="overlayTopLayerSurf">
          <Typography gutterBottom variant="h6" component="div" align="center" color="#fff">
            Surf experience
          </Typography>
          <hr
            style={{ backgroundColor: '#009be5', width: '100px', height: '3px', border: 'none' }}
          />
          <Box
            ref={ref}
            sx={{ padding: '0 50px', maxWidth: '500px', margin: 'auto', marginTop: '50px' }}>
            <Typography sx={{ mb: 2 }} color="#fff">
              {`It is not all about coding, enjoy outdors exercise, and have tons of fun, during our surf lessons. Understand the theory behind surfing, practice, practice, and more practice improving your surf skills surrounded by good vibes.`}
            </Typography>
            <List>
              <ListItem>
                <Typography color="#fff">3 weeks of surf lessons. 50+ hours</Typography>
              </ListItem>
              <ListItem>
                <Typography color="#fff">Basic surf theory for beginners</Typography>
              </ListItem>
              <ListItem>
                <Typography color="#fff">Lessons with surf instructor</Typography>
              </ListItem>
              <ListItem>
                <Typography color="#fff">Surf guiding</Typography>
              </ListItem>
              <ListItem>
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
