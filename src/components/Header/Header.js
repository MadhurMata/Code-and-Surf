import React from 'react';

import CommonButton from 'components/CommonButton/CommonButton';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import { Link, List, Typography, Box, useTheme, useMediaQuery, Tooltip } from '@mui/material';
import blogIcon from 'assets/images/blog.svg';
import './styles.css';

import { mainNavbarItems } from './navbarItems';

export const Header = ({ anchorEl, scrollToElement }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const headerStyles = {
    wrapper: {
      position: 'sticky',
      top: 0,
      right: 0,
      height: '70px',
      padding: '50px 32px 20px',
      backgroundColor: '#5FAAB2',
      margin: '0 auto',
      zIndex: 10
    },
    wrapperSmallDevice: {
      position: 'sticky',
      top: 0,
      right: 0,
      height: '40px',
      padding: '30px 20px 20px',
      backgroundColor: '#5FAAB2',
      margin: '0 auto',
      zIndex: 10
    },
    innerBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'baseline'
    },
    link: {
      margin: '0 20px',
      fontWeight: 500,
      color: '#e2e2e2',
      '&:hover': {
        color: '#322f2f',
        cursor: 'pointer'
      },
      '&:selected': {
        color: '#322f2f'
      }
    },
    linkSelected: {
      color: '#322f2f',
      fontWeight: 700,
      borderBottom: '3px solid #DDC476',
      margin: '0 20px',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    titleSmall: {
      fontSize: '1.8rem'
    },
    webButton: {
      width: '40px',
      height: '40px',
      color: '#DDC476',
      fontWeight: 'bold',
      margin: 0,
      padding: 0
    },
    logo: {
      fontFamily: 'gota-light'
    },
    imageContainer: {
      width: '30px',
      height: '30px',
      backgroundImage: `url(${blogIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };

  return (
    <Box sx={matches ? headerStyles.wrapperSmallDevice : headerStyles.wrapper}>
      <Box sx={headerStyles.innerBox}>
        <Box>
          <Link sx={{ textDecoration: 'none' }} href="/">
            <div>
              <h1 className="firstLineLogo">
                {'<code />'}
                <br></br>
                <span className="subLineLogo">& Surf Bali</span>
              </h1>
            </div>
          </Link>
        </Box>

        <Box display="flex" flexDirection="row" alignItems={'baseline'}>
          <Box display={{ xs: 'none', md: 'block' }}>
            <List disablePadding sx={{ display: 'flex' }}>
              {mainNavbarItems.map((item) => (
                <Typography
                  sx={anchorEl === item.route ? headerStyles.linkSelected : headerStyles.link}
                  key={item.id}
                  onClick={() => scrollToElement(item.route)}>
                  {item.label}
                </Typography>
              ))}
            </List>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Link sx={{ textDecoration: 'none' }} href="/blog">
              <CommonButton sx={headerStyles.webButton}>
                <Tooltip title="Blog" arrow>
                  <Box sx={headerStyles.imageContainer}></Box>
                </Tooltip>
              </CommonButton>
            </Link>
            <Box sx={{ textDecoration: 'none' }} onClick={() => scrollToElement('contact')}>
              <CommonButton sx={headerStyles.webButton}>
                <Tooltip title="Contact us" arrow>
                  <MailOutlineOutlinedIcon sx={headerStyles.webButton} />
                </Tooltip>
              </CommonButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
