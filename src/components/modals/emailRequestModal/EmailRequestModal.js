import BasicModal from 'components/basicModal/BasicModal';
import EmailRequestForm from 'components/emailRequestForm/EmailRequestForm';

import React from 'react';

function EmailRequestModal({ open, onClose, title, setOpen }) {
  return (
    <>
      <BasicModal
        open={open}
        onClose={onClose}
        title={title}
        content={<EmailRequestForm onClose={onClose} setOpen={setOpen} />}></BasicModal>
    </>
  );
}

export default EmailRequestModal;
