import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function ContactRequestForm({ onClose, setOpen, setErrorMessage }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...{
          email,
          firstName,
          lastName,
          message
        }
      })
    })
      .then((response) => {
        if (!response.ok) {
          setErrorMessage(true);
          throw new Error('Not 2xx response', { cause: response });
        } else {
          setOpen(true);
        }
      })
      .then(() => setOpen(true))
      .then(() => {
        onClose();
        setEmail('');
        setFirstName('');
        setLastName('');
        setMessage('');
      })
      .catch(() => setErrorMessage(true));
  };
  return (
    <form
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="contact"
      method="post"
      onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />

      <p hidden>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
            onChange={(e) => setFirstName(e.target.value)}
            label="Name"
            name="firstName"
            placeholder="Enter name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            name="lastName"
            placeholder="Enter last name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            placeholder="Enter email"
            variant="outlined"
            type="email"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
            onChange={(e) => setMessage(e.target.value)}
            label="Message"
            name="message"
            placeholder="Type your message here"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ color: 'black', fontWeight: 'bold' }}
            type="submit"
            variant="contained"
            fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactRequestForm;
