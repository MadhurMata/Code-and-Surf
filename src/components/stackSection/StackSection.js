import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';
import { Chip, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import girlCoding from 'assets/images/girl-coding-stack.jpeg';

import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

import { Box } from '@mui/system';

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
      width: '70%',
      padding: '50px',
      maxWidth: '1400px',
      margin: '100px auto 0',
      backgroundColor: '#92926e'
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
    },
    imagesContainer: {
      marginTop: '50px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <Box id={anchorEl} container ref={ref} sx={sectionsStyles.fistSectionContainer}>
      <Typography gutterBottom variant="h6" component="div" align="center" color="#fff">
        Our stack
      </Typography>
      <hr style={{ backgroundColor: '#009be5', width: '100px', height: '3px', border: 'none' }} />
      <Box item sx={sectionsStyles.fistSectionText}>
        <Typography sx={{ my: 2 }} color="#fff">
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
        <Typography sx={{ mt: 2 }} color="#fff">
          And much more...
        </Typography>
      </Box>
      <Box sx={sectionsStyles.imagesContainer}>
        <Box sx={sectionsStyles.img}>
          <img style={{ width: '100%' }} src={girlCoding} alt="Code on a screen" />
        </Box>
      </Box>
      {/* <Grid
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
        </Grid> */}
      {/* <Grid
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
        </Grid> */}
    </Box>
  );
}

export default StackSection;
