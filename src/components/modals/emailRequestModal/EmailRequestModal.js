import BasicModal from 'components/basicModal/BasicModal';
import EmailRequestForm from 'components/emailRequestForm/EmailRequestForm';

import React from 'react';

function EmailRequestModal({ open, onClose, title, setOpen, setErrorMessage }) {
  return (
    <>
      <BasicModal
        open={open}
        onClose={onClose}
        title={title}
        content={
          <EmailRequestForm
            title={title}
            onClose={onClose}
            setErrorMessage={setErrorMessage}
            setOpen={setOpen}
          />
        }></BasicModal>
    </>
  );
}

export default EmailRequestModal;
