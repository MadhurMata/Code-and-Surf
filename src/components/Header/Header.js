import React from 'react';

import CommonButton from 'components/CommonButton/CommonButton';

import { Link, List, Typography, Box } from '@mui/material';

import { mainNavbarItems } from './navbarItems';

export const Header = ({ anchorEl, setAnchorEl }) => {
  const headerStyles = {
    wrapper: {
      position: 'sticky',
      top: 0,
      right: 0,
      height: '70px',
      padding: '50px 50px 0',
      backgroundColor: '#fff',
      zIndex: 10
    },
    innerBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    },
    link: {
      margin: '0 20px',
      fontWeight: 500,
      color: '#7a7878',
      '&:hover': {
        color: '#322f2f',
        textDecoration: 'none',
        cursor: 'pointer'
      },
      '&:selected': {
        color: '#322f2f'
      }
    },
    linkSelected: {
      color: '#322f2f',
      fontWeight: 500,
      borderBottom: '3px solid #1976d2',
      margin: '0 20px'
    },
    webButton: {
      // marginRight: '5px'
    }
  };

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.innerBox}>
        <Typography sx={{ ml: '100px' }} variant="h1" color="primary">
          Code <span>&</span> Surf
        </Typography>
        <Box display="flex" flexDirection="row" alignItems={'baseline'}>
          <List disablePadding>
            {mainNavbarItems.map((item) => (
              <Link
                sx={anchorEl === item.route ? headerStyles.linkSelected : headerStyles.link}
                key={item.id}
                href={'#' + item.route}
                underline="hover"
                onClick={() => setAnchorEl(item.route)}>
                {item.label}
              </Link>
            ))}
          </List>
          <Box>
            <CommonButton sx={headerStyles.webButton} variant="contained">
              Contact us
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
