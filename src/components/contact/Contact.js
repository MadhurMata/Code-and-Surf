import React, { useState } from 'react';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';
import BasicModal from 'components/basicModal/BasicModal';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

function Contact() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [successMesage, setSuccessMessage] = useState(false);

  const contactStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '32px',
      maxWidth: '1400px'
    }
  };

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
      .then(() => setSuccessMessage(true))
      .then(() => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setMessage('');
      })
      .catch((error) => alert(error));
  };

  return (
    <SectionWrapper title="Want to know more? Contact us!" backgroundColor="#aec3bd">
      <Grid container sx={contactStyles.container}>
        <Grid item sm={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="body2" component="p" mb={1}>
                Fill out the form and our team will get back to you.
              </Typography>
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                      onChange={(e) => setFirstName(e.target.value)}
                      label="First Name"
                      name="firstName"
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
            </CardContent>
          </Card>
        </Grid>
        <BasicModal
          open={successMesage}
          onClose={() => setSuccessMessage(false)}
          title="Contact form request"
          content={'A member of our team will reach you as soon as possible'}></BasicModal>
      </Grid>
    </SectionWrapper>
  );
}

export default Contact;
