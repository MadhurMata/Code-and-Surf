import BasicModal from 'components/basicModal/BasicModal';
import ContactRequestForm from 'components/contactRequestForm/ContactRequestForm';

import React from 'react';

function ContactModal({ open, onClose, title, setOpen, setErrorMessage }) {
  return (
    <>
      <BasicModal
        open={open}
        onClose={onClose}
        title={title}
        content={
          <ContactRequestForm
            onClose={onClose}
            setErrorMessage={setErrorMessage}
            setOpen={setOpen}
          />
        }></BasicModal>
    </>
  );
}

export default ContactModal;
