import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';
import { Chip, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import teaching from 'assets/images/code-background.jpg';

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
      minHeight: '100%',
      padding: '0 50px',
      marginTop: '50px'
    },
    fistSectionText: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderTopRightRadius: '30px',
      borderBottomRightRadius: '30px',
      backgroundColor: '#eae9e9'
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
    <SectionWrapper title="Our stack" id={anchorEl}>
      <Grid container ref={ref} sx={sectionsStyles.fistSectionContainer}>
        <Grid
          item
          sx={{ borderTopLeftRadius: '30px' }}
          sm={6}
          display={{ xs: 'none', sm: 'block' }}>
          <img
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: '30px',
              borderBottomLeftRadius: '30px'
            }}
            src={teaching}
            alt="Code on a screen"
          />
        </Grid>
        <Grid
          item
          sx={matches ? sectionsStyles.fistSectionTextSmall : sectionsStyles.fistSectionText}
          sm={6}
          xs={12}>
          <Typography sx={{ my: 2 }}>
            {`Learn full-stack development skills based on the "MERN stack". Our bootcamp will prepare
          you to launch a new career in technology as a junior software developer.`}
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={1}>
            {techStack.map((item) => (
              <Grid item key={item}>
                <Chip label={item} color="primary" variant="outlined" />
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ mt: 2 }}>And much more...</Typography>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default StackSection;
