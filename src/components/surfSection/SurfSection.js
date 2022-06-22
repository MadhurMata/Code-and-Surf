import React, { useEffect, useRef } from 'react';

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
    <SectionWrapper title="Surf experience" id={anchorEl}>
      <Box
        ref={ref}
        sx={{ padding: '0 50px', maxWidth: '500px', margin: 'auto', marginTop: '50px' }}>
        <Typography sx={{ mb: 2 }}>
          {`LIt is not all about coding, enjoy outdors exercise, and have tons of fun, during our surf lessons. Understand the theory behind surfing, practice, practice, and more practice improving your surf skills surrounded by good vibes.`}
        </Typography>
        <List>
          <ListItem>3 weeks of surf lessons. 50+ hours</ListItem>
          <ListItem>Basic surf theory for beginners</ListItem>
          <ListItem>Lessons with surf instructor</ListItem>
          <ListItem>Surf guiding</ListItem>
          <ListItem>Trips to different spots</ListItem>
        </List>
      </Box>
    </SectionWrapper>
  );
}

export default SurfSection;
