import { useTheme } from '@emotion/react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import CommonButton from 'components/CommonButton/CommonButton';
import React from 'react';

function ActionButton() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const actionButtonStyles = {
    acttionContainer: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      marginTop: '16px',
      borderRadius: '8.5px',
      backgroundColor: '#dbcea5'
    },
    actionText: {
      padding: '0 16px',
      fontSize: '16px'
    },
    actionButton: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: '16px'
    }
  };
  return (
    <Box sx={actionButtonStyles.acttionContainer}>
      <Typography sx={actionButtonStyles.actionText}>Coming soon</Typography>
      <Box sx={{ textDecoration: 'none' }}>
        {matches ? (
          <CommonButton sx={actionButtonStyles.actionButton} variant="contained">
            Waiting List
          </CommonButton>
        ) : (
          <CommonButton sx={actionButtonStyles.actionButton} variant="contained">
            Join the waiting List
          </CommonButton>
        )}
      </Box>
    </Box>
  );
}

export default ActionButton;
