import React, { useState } from 'react';

import { Box, Link, Typography } from '@mui/material';

import PrivacyModal from 'components/modals/privacyModal/PrivacyModal';

import instagramLogo from 'assets/images/instagram.png';
// import facebookLogo from 'assets/images//facebook.png';
// import linkedinLogo from 'assets/images/linkedin.png';

function Footer() {
  const [open, setOpen] = useState(false);

  const footerStyles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '50px',
      boxShadow: 'inset 0 1px #d1d1d1'
    },
    logo: {
      width: '20px',
      height: 'auto'
    }
  };
  return (
    <Box sx={footerStyles.wrapper}>
      <Typography variant="body2" color="text.secondary">
        Copyright 2022 &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp;{' '}
        <span>
          <Link target="_blank" href="https://www.instagram.com/codesurfbali">
            <img style={{ width: '15px', margin: '0 5px' }} src={instagramLogo} alt="Instagram" />
          </Link>
          {/* <Link target="_blank" href="http://www.google.com">
            <img style={{ width: '15px', margin: '0 5px' }} src={facebookLogo} alt="Facebook" />
          </Link>
          <Link target="_blank" href="http://www.google.com">
            <img style={{ width: '15px', margin: '0 5px' }} src={linkedinLogo} alt="Linkedin" />
          </Link> */}
        </span>
      </Typography>
      <PrivacyModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default Footer;
