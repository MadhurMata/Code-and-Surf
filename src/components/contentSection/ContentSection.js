import React, { useEffect, useRef } from 'react';

import { useIntersection } from 'hooks/useIntersection';

import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material';

import { contentItems } from './contentItems';
import { useTheme } from '@emotion/react';

import SectionWrapper from 'components/sectionWrapper/SectionWrapper';

function ContentSection({ anchorEl, setAnchorEl }) {
  const ref = useRef();
  const inViewport = useIntersection(ref, '-350px'); // Trigger as soon as the element becomes visible
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="Look what we offer!" id={anchorEl}>
      <Grid
        container
        ref={ref}
        justifyContent="center"
        alignItems="center"
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: '0 50px', maxWidth: '1220px', width: '100%', margin: '0 auto !important' }}>
        {contentItems.map((item) => (
          <Grid item key={item.id}>
            {!matches ? (
              <Card sx={{ maxWidth: 300, height: '300px' }}>
                <CardMedia
                  component="img"
                  sx={{ margin: 'auto', maxHeight: '140px', width: 'auto' }}
                  image={item.imgUrl}
                  alt={item.label}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" align="center">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Card sx={{ maxWidth: 300 }}>
                <Typography gutterBottom variant="h6" component="div" align="center">
                  {item.label}
                </Typography>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                  <CardMedia
                    component="img"
                    sx={{ margin: 'auto', height: 'auto', width: '50px' }}
                    image={item.imgUrl}
                    alt={item.label}
                  />
                  <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default ContentSection;
