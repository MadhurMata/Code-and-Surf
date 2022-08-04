import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';
import { Chip, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import girlCoding from 'assets/images/girl-coding-stack.jpeg';

import { Box } from '@mui/system';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

const techStack = [
  'JavaScript / TypeScript',
  'HTML',
  'CSS',
  'React',
  'Node',
  'Express',
  'Mongo DB',
  `REST API's`,
  'Git'
];

function StackSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      maxWidth: '1400px'
    },
    firstSecContSmallDevices: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      maxWidth: '1400px'
    },
    fistSectionText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '500px'
    },
    fistSectionTextSmall: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '30px',
      backgroundColor: '#eae9e9'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Our stack" backgroundColor="#D19560">
      <Box
        container
        ref={ref}
        sx={
          matches ? sectionsStyles.firstSecContSmallDevices : sectionsStyles.fistSectionContainer
        }>
        <Box>
          <img
            style={{ width: '100%', borderRadius: '21px' }}
            src={girlCoding}
            alt="Code on a screen"
          />
        </Box>
        <Box item sx={sectionsStyles.fistSectionText}>
          <Typography
            sx={{
              my: 2,
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400',
              color: 'white !important'
            }}>
            {`Learn full-stack development skills based on the "MERN stack". Our bootcamp will prepare
          you to launch a new career in technology as a junior software developer.`}
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={1}>
            {techStack.map((item) => (
              <Grid item key={item}>
                <Chip
                  label={item}
                  sx={{ color: 'black', backgroundColor: '#ead1b4', fontSize: '14px' }}
                  variant="contained"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </SectionWrapper>
  );
}

export default StackSection;
