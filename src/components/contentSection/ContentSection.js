import React from 'react';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { contentItems } from './contentItems';

function ContentSection() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      rowSpacing={6}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ padding: '50px', maxWidth: '1220px', width: '100%', margin: '0 auto !important' }}>
      {contentItems.map((item) => (
        <Grid item key={item.id}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              sx={{ margin: 'auto', maxHeight: '140px', width: 'auto' }}
              image={item.imgUrl}
              alt={item.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentSection;
