import React from 'react';

import './styles.css';

import CommonButton from 'components/CommonButton/CommonButton';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { Link, Box, useTheme, useMediaQuery, Tooltip } from '@mui/material';

export const HeaderBlog = ({ setOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const headerStyles = {
    wrapper: {
      position: 'sticky',
      alignItems: 'center',
      top: 0,
      right: 0,
      height: '70px',
      padding: '50px 0 20px',
      backgroundColor: '#5FAAB2',
      margin: '0 auto',
      zIndex: 10
    },
    wrapperSmallDevice: {
      position: 'sticky',
      alignItems: 'center',
      top: 0,
      right: 0,
      height: '60px',
      padding: '20px 0 20px',
      backgroundColor: '#5FAAB2',
      margin: '0 auto',
      zIndex: 10
    },
    innerBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    buttonsContainer: {
      width: '130px'
    },
    webButton: {
      color: '#DDC476',
      fontWeight: 'bold',
      margin: 0,
      padding: 0
    },
    logo: {
      fontFamily: 'gota-light'
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
          <Box sx={matches ? headerStyles.buttonsContainer : null}>
            <Link sx={{ textDecoration: 'none' }} href="/">
              <CommonButton aria-label="Back home" sx={{ paddingTop: 0 }}>
                <Tooltip title="Back home" arrow>
                  <KeyboardBackspaceOutlinedIcon sx={headerStyles.webButton} />
                </Tooltip>
              </CommonButton>
            </Link>

            <CommonButton aria-label="Contact us" sx={{ paddingTop: 0 }} onClick={setOpen}>
              <Tooltip title="Contact us" arrow>
                <MailOutlineOutlinedIcon sx={headerStyles.webButton} />
              </Tooltip>
            </CommonButton>
            <CommonButton aria-label="Previous post">
              <Tooltip title="Previous post" arrow sx={{ zIndex: 1000 }}>
                <NavigateBeforeOutlinedIcon sx={headerStyles.webButton} />
              </Tooltip>
            </CommonButton>
            <CommonButton aria-label="Next post">
              <Tooltip title="Next post" arrow>
                <NavigateNextOutlinedIcon sx={headerStyles.webButton} />
              </Tooltip>
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
