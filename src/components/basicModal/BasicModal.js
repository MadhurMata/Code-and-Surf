import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { modalStyles } from './styles';

const BasicModal = ({ open, onClose, title, subTitle, content, showEmail }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <CloseIcon sx={{ cursor: 'pointer' }} onClick={onClose}></CloseIcon>
        </Box>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        {showEmail && (
          <Link sx={modalStyles.email} href="mailto:info@codesurfbali.com">
            info@codesurfbali.com
          </Link>
        )}
        <Box sx={modalStyles.buttons}></Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
