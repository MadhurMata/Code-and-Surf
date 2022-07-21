import React, { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

import surfLesson from 'assets/images/surf-lesson.jpeg';
import temple from 'assets/images/temple.jpeg';

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
  const theme = useTheme();
  const matchesSize = useMediaQuery(theme.breakpoints.down('sm'));

  const contactStyles = {
    container: {
      padding: '0 50px',
      maxWidth: '1400px',
      margin: '50px auto'
    },
    containerSmallDevices: {
      padding: '0 20px',
      margin: '50px auto'
    }
  };

  const handleSubmit = (e) => {
    console.log('la vida', e);
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...{ email, firstName, lastName, message }
      })
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <SectionWrapper title="Want to know more?" backgroundColor="#f0f1ef">
      <Grid
        container
        sx={matchesSize ? contactStyles.containerSmallDevices : contactStyles.container}>
        <Grid item sm={12} md={7}>
          <Card sx={{ padding: '20px 5px', backgroundColor: '#212529', opacity: 0.9 }}>
            <CardContent>
              <Typography variant="body2" component="p" color="#fff" mb={2}>
                Fill up the form and our team will get back to you.
              </Typography>
              <form data-netlify="true" name="contact" method="post" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                      onChange={(e) => setFirstName({ firstName: e.target.value })}
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
                      onChange={(e) => setLastName({ lastName: e.target.value })}
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
                      onChange={(e) => setEmail({ email: e.target.value })}
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
                      onChange={(e) => setMessage({ message: e.target.value })}
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
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          sm={5}
          display={{ xs: 'none', sm: 'none', md: 'block' }}
          sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '5%',
              width: '60%',
              minWidth: '300px',
              zIndex: 5
            }}>
            <img
              style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
              src={temple}
              alt="Coding class"
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '80px',
              right: '15%',
              width: '50%',
              height: '320px',
              border: 'solid 4px #009be5',
              borderRadius: '20px',
              zIndex: 1
            }}></Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: '100px',
              left: '15%',
              width: '75%',
              height: '250px',
              border: 'solid 4px #009be5',
              borderRadius: '20px',
              zIndex: 1
            }}></Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '60%',
              minWidth: '300px',
              zIndex: 3
            }}>
            <img
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px'
              }}
              src={surfLesson}
              alt="People surfing"
            />
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Contact;
