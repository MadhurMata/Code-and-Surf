import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { modalStyles } from './styles';

const BasicModal = ({ open, onClose, title, subTitle, content }) => {
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
        <Box sx={modalStyles.buttons}>
          {/* <CommonButton variant="contained" onClick={onSubmit}>
            Submit
          </CommonButton> */}
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
