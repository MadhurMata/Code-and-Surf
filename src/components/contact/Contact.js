import React from 'react';

import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

function Contact() {
  return (
    <SectionWrapper title="Contact us for more information" backgroundColor="#67cab9">
      <Card id="contact" sx={{ maxWidth: '80%', padding: '20px 5px', margin: '50px auto' }}>
        <CardContent>
          <Typography variant="body2" component="p">
            Fill up the form and our team will get back to you.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
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
    </SectionWrapper>
  );
}

export default Contact;
