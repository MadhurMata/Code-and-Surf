import React, { useState, useRef } from 'react';

import { Header } from 'components/Header/Header';
import FirstSection from 'components/firstSection/FirstSection';
import ContentSection from 'components/contentSection/ContentSection';
import StackSection from 'components/stackSection/StackSection';
import SurfSection from 'components/surfSection/SurfSection';
import Contact from 'components/contact/Contact';
import Footer from 'components/Footer/Footer';
import { Box } from '@mui/material';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const boootcampContent = useRef(null);
  const techStack = useRef(null);
  const surfPackage = useRef(null);
  const contact = useRef(null);

  const scrollToElement = (ref) => {
    switch (ref) {
      case 'boootcampContent':
        window.scrollTo({
          top: boootcampContent.current.offsetTop - 140,
          behavior: 'smooth'
        });
        break;
      case 'techStack':
        window.scrollTo({
          top: techStack.current.offsetTop - 140,
          behavior: 'smooth'
        });
        break;
      case 'surfPackage':
        window.scrollTo({
          top: surfPackage.current.offsetTop - 140,
          behavior: 'smooth'
        });
        break;
      case 'contact':
        window.scrollTo({
          top: contact.current.offsetTop - 140,
          behavior: 'smooth'
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Header
        anchorEl={anchorEl}
        boootcampContent={boootcampContent}
        scrollToElement={(rute) => scrollToElement(rute)}
      />

      <FirstSection anchorEl="firstSection" setAnchorEl={setAnchorEl} />
      <Box ref={boootcampContent}>
        <ContentSection anchorEl="boootcampContent" setAnchorEl={setAnchorEl} />
      </Box>
      <Box ref={techStack}>
        <StackSection anchorEl="techStack" setAnchorEl={setAnchorEl} />
      </Box>
      <Box ref={surfPackage}>
        <SurfSection anchorEl="surfPackage" setAnchorEl={setAnchorEl} />
      </Box>
      <Box ref={contact}>
        <Contact />
      </Box>
      <Footer />
    </>
  );
}

export default App;
