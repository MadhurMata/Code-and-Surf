import React, { useEffect, useRef, useState } from 'react';

import { useIntersection } from 'hooks/useIntersection';
import { Chip, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import digitalNomad from 'assets/images/digital-nomad.jpeg';

import { Box } from '@mui/system';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';
import CommonButton from 'components/CommonButton/CommonButton';
import EmailRequestModal from 'components/modals/emailRequestModal/EmailRequestModal';
import BasicModal from 'components/basicModal/BasicModal';

const techStack = [
  'JavaScript / TypeScript',
  'HTML',
  'CSS',
  'React',
  'Node',
  'Express',
  'MongoDB',
  `REST APIs`,
  'Git',
  'Unit Testing',
  '...'
];

function StackSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [successMesage, setSuccessMessage] = useState(false);
  const [errorMesage, setErrorMessage] = useState(false);

  const sectionsStyles = {
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px',
      maxWidth: '500px'
    },
    fistSectionText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      maxWidth: '500px',
      paddingLeft: '20px'
    },
    fistSectionTextSmall: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '16px'
    },
    webButton: {
      width: 'fit-content',
      marginTop: '16px',
      color: 'black',
      fontWeight: 'bold'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Our stack" backgroundColor="#D19560">
      <Box
        ref={ref}
        sx={
          matches ? sectionsStyles.firstSecContSmallDevices : sectionsStyles.fistSectionContainer
        }>
        <Box sx={matches ? { width: '100%' } : { width: '40%' }}>
          <img
            style={{ width: '100%', borderRadius: '21px' }}
            src={digitalNomad}
            alt="Code on a screen"
          />
        </Box>
        <Box
          item
          sx={matches ? sectionsStyles.fistSectionTextSmall : sectionsStyles.fistSectionText}>
          <Typography
            sx={{
              mb: 2,
              fontSize: '18px',
              lineHeight: '150%',
              fontWeight: '400',
              color: 'white !important'
            }}>
            {`Learn full-stack development skills based on the "MERN stack". Our bootcamp will prepare
          you to launch a new career in tech as a junior software developer.`}
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
          <Box sx={{ margin: 'auto' }}>
            <CommonButton
              sx={sectionsStyles.webButton}
              onClick={() => setOpen(true)}
              variant="contained">
              Get course content
            </CommonButton>
          </Box>
        </Box>
        <>
          <EmailRequestModal
            open={open}
            title="Request course content"
            onClose={() => setOpen(false)}
            setOpen={(open) => setSuccessMessage(open)}
            setErrorMessage={(open) => setErrorMessage(open)}
          />
          <BasicModal
            open={successMesage}
            onClose={() => setSuccessMessage(false)}
            title="Request course content"
            content={`Course content on it's way!`}
          />
          <BasicModal
            showEmail
            open={errorMesage}
            onClose={() => setErrorMessage(false)}
            title="Request course content"
            content={'Oops, something went wrong. Please try again later or contact us by e-mail:'}
          />
        </>
      </Box>
    </SectionWrapper>
  );
}

export default StackSection;
