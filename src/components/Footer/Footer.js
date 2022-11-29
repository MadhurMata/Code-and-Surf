import React, { useState } from 'react';

import { Box, Link, Typography } from '@mui/material';

import PrivacyModal from 'components/modals/privacyModal/PrivacyModal';

import instagramLogo from 'assets/images/instagram.png';
import facebookLogo from 'assets/images//facebook.png';
// import linkedinLogo from 'assets/images/linkedin.png';

function Footer() {
  const [open, setOpen] = useState(false);

  const footerStyles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100px',
      width: '100%',
      boxShadow: 'inset 0 1px #d1d1d1'
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 32px',
      maxWidth: 'fit-content'
    },
    logo: {
      width: '20px',
      height: 'auto'
    }
  };
  return (
    <Box sx={footerStyles.wrapper}>
      <Box sx={footerStyles.container}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Copyright 2022 &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp;{' '}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            All rights reserved &nbsp;|&nbsp;{' '}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            <Link
              color="text.secondary"
              sx={{ textDecoration: 'none' }}
              href="mailto:info@codesurfbali.com">
              info@codesurfbali.com
            </Link>{' '}
            &nbsp;|&nbsp;{' '}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            <Link target="_blank" href="https://www.instagram.com/codesurfbali">
              <img style={{ width: '15px', margin: '0 5px' }} src={instagramLogo} alt="Instagram" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100085144951004">
              <img style={{ width: '15px', margin: '0 5px' }} src={facebookLogo} alt="Facebook" />
            </Link>
            {/* <Link target="_blank" href="http://www.google.com">
              <img style={{ width: '15px', margin: '0 5px' }} src={linkedinLogo} alt="Linkedin" />
            </Link> */}
          </Typography>
        </Box>
      </Box>

      <PrivacyModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default Footer;
