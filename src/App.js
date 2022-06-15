import React, { useState } from 'react';
import { Header } from 'components/Header/Header';

import FirstSection from 'components/firstSection/FirstSection';
import ContentSection from 'components/contentSection/ContentSection';
import StackSection from 'components/stackSection/StackSection';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Header anchorEl={anchorEl} setAnchorEl={setAnchorEl} />

      <FirstSection anchorEl="boootcampContent" setAnchorEl={setAnchorEl} />
      <ContentSection anchorEl="techStack" setAnchorEl={setAnchorEl} />
      <StackSection anchorEl="surfPackage" setAnchorEl={setAnchorEl} />
      <FirstSection anchorEl="surf" setAnchorEl={setAnchorEl} />
      <FirstSection anchorEl="contact" setAnchorEl={setAnchorEl} />
    </div>
  );
}

export default App;
