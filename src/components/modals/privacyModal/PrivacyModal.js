import BasicModal from 'components/basicModal/BasicModal';

import React from 'react';

function PrivacyModal({ open, onClose }) {
  return (
    <>
      <BasicModal
        open={open}
        onClose={onClose}
        title="Privacy Policy"
        content={<h1>I am a modal</h1>}></BasicModal>
    </>
  );
}

export default PrivacyModal;
