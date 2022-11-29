import React, { useEffect, useRef, useState } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import './styles.css';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import ActionButton from 'components/actionButton/ActionButton';
import EmailRequestModal from 'components/modals/emailRequestModal/EmailRequestModal';
import BasicModal from 'components/basicModal/BasicModal';

function FirstSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matchesSmall = useMediaQuery(theme.breakpoints.down('400'));
  const [open, setOpen] = useState(false);
  const [successMesage, setSuccessMessage] = useState(false);
  const [errorMesage, setErrorMessage] = useState(false);

  const sectionsStyles = {
    fistSectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '32px'
    },
    fistSectionTextSmall: {
      textAlign: 'center',
      justifyContent: 'center',
      padding: '32px'
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);

  return (
    <>
      <Box
        ref={ref}
        id="imageContainer"
        sx={matchesSmall ? { maxHeight: '500px' } : { maxHeight: '400px' }}>
        <Box className="overlayTopLayer">
          <Box sx={sectionsStyles.fistSectionContainer}>
            <Box sx={{ maxWidth: '440px', textAlign: 'start' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '2.2rem',
                  lineHeight: 1.2,
                  letterSpacing: '0.03em',
                  color: '#fff'
                }}>
                Become a<span style={{ color: '#DDC476', fontWeight: 900 }}> web developer </span>
                while surfing in paradise
              </Typography>
            </Box>
            <Box sx={{ maxWidth: '500px', textAlign: 'start' }}>
              <Typography color="#fff" sx={{ mt: 2, fontSize: '20px' }}>
                {`Launch your career as a Web Developer. Learn from the best to code web applications while living on Bali, the Island of Gods.`}
              </Typography>
              <ActionButton setOpen={() => setOpen(true)} />
            </Box>
          </Box>
          <>
            <EmailRequestModal
              open={open}
              title="Waiting List"
              onClose={() => setOpen(false)}
              setOpen={(open) => setSuccessMessage(open)}
              setErrorMessage={(open) => setErrorMessage(open)}
            />
            <BasicModal
              open={successMesage}
              onClose={() => setSuccessMessage(false)}
              title="Waiting List"
              content={`We received your request! A member of our team will reach you as soon as possible`}
            />
            <BasicModal
              showEmail
              open={errorMesage}
              onClose={() => setErrorMessage(false)}
              title="Waiting List"
              content={
                'Oops, something went wrong. Please try again later or contact us by e-mail:'
              }
            />
          </>
        </Box>
        <Box className="overlay"></Box>
      </Box>
    </>
  );
}

export default FirstSection;
