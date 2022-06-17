import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import { Box, List, ListItem, Typography } from '@mui/material';

import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

function SurfSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible

  const listStyle = {
    li: {
      fontFamily: 'Walter Turncoat',
      marginBottom: '15px',
      marginRight: '30px',
      background: 'linear-gradient(45deg, #095379, #00d4ff)',
      height: '24px',
      width: '24px',
      borderRadius: '50%',
      span: {
        fontFamily: 'Walter Turncoat',

        marginLeft: '30px'
      }
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Surf experience" id={anchorEl}>
      <Box ref={ref} sx={{ padding: '20px 50px', maxWidth: '500px', margin: 'auto' }}>
        <Typography sx={{ my: 2 }}>
          {`Learn full-stack development skills based on the "MERN stack". Our bootcamp will prepare
          you to launch a new career in technology as a junior software developer.`}
        </Typography>
        <List>
          <ListItem>3 weeks of surf lessons</ListItem>
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
