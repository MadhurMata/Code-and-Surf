import React, { useRef, useState } from 'react';
import { Header } from 'components/Header/Header';

import FirstSection from 'components/firstSection/FirstSection';
import ContentSection from 'components/contentSection/ContentSection';
import StackSection from 'components/stackSection/StackSection';
import { useIntersection } from 'hooks/useIntersection';

function App() {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div>
      <Header anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <FirstSection
        anchorEl="boootcampContent"
        setAnchorEl={setAnchorEl}
        inViewport={inViewport}
        componentReference={ref}
      />
      <FirstSection
        anchorEl="techStack"
        setAnchorEl={setAnchorEl}
        inViewport={inViewport}
        componentReference={ref}
      />
      <FirstSection
        anchorEl="surfPackage"
        setAnchorEl={setAnchorEl}
        inViewport={inViewport}
        componentReference={ref}
      />
      {/* <ContentSection anchorEl="techStack" setAnchorEl={setAnchorEl} />
      <StackSection anchorEl="surfPackage" setAnchorEl={setAnchorEl} /> */}
    </div>
  );
}

export default App;
