import React, { useState } from 'react';
import { Header } from 'components/Header/Header';

import FirstSection from 'components/firstSection/FirstSection';
import ContentSection from 'components/contentSection/ContentSection';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Header anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <FirstSection anchorEl="boootcampContent" setAnchorEl={setAnchorEl} />
      <ContentSection anchorEl="techStack" setAnchorEl={setAnchorEl} />
      <FirstSection anchorEl="surfPackage" setAnchorEl={setAnchorEl} />
    </div>
  );
}

export default App;
