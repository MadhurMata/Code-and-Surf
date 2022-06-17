import React, { useState } from 'react';
import { Header } from 'components/Header/Header';

import FirstSection from 'components/firstSection/FirstSection';
import ContentSection from 'components/contentSection/ContentSection';
import StackSection from 'components/stackSection/StackSection';
import SurfSection from 'components/surfSection/SurfSection';
import Contact from 'components/contact/Contact';
import Footer from 'components/Footer/Footer';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Header anchorEl={anchorEl} setAnchorEl={setAnchorEl} />

      <FirstSection />
      <ContentSection anchorEl="boootcampContent" setAnchorEl={setAnchorEl} />
      <StackSection anchorEl="techStack" setAnchorEl={setAnchorEl} />
      <SurfSection anchorEl="surfPackage" setAnchorEl={setAnchorEl} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
