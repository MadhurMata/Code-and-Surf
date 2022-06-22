import React from 'react';

import './styles.css';

function ContactWrapper({ children }) {
  return (
    <>
      <div className="spacer borderTop"></div>
      {children}
      <div className="spacer borderBottom"></div>
    </>
  );
}

export default ContactWrapper;
