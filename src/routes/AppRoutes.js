import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/:heroName/:heroId" element={<Hero />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
