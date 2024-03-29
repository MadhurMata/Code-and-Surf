export const modalStyles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#ead1b4',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px'
  },
  inputFields: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '15px',
    '.MuiInput-root': {
      marginBottom: '20px'
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'end'
  },
  email: {
    display: 'block',
    color: 'black',
    fontWeight: 500,
    marginTop: '10px',
    textDecorationColor: 'black'
  }
};
