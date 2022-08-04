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

  const contentSectionStyles = {
    cardcontent: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0
      }
    }
  };

  useEffect(() => {
    if (inViewport && anchorEl) setAnchorEl(anchorEl);
  }, [inViewport]);
  return (
    <SectionWrapper title="What we offer" backgroundColor="#ead1b4">
      <Grid
        container
        ref={ref}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: '32px', maxWidth: '1220px' }}
        rowSpacing={{ xs: 2, sm: 2, md: 6 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {contentItems.map((item) => (
          <Grid item key={item.id} sx={{ paddingLeft: '0 !important' }}>
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
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  maxWidth: 300,
                  height: '109px',
                  padding: '8px'
                }}>
                <CardMedia
                  component="img"
                  sx={{ margin: 'auto', height: '100px', width: 'auto' }}
                  image={item.imgUrl}
                  alt={item.label}
                />
                <CardContent sx={contentSectionStyles.cardcontent}>
                  <Typography
                    sx={{
                      ml: '8px',
                      fontSize: '20px',
                      lineHeight: '150%',
                      fontWeight: 'bold',
                      mb: 0
                    }}
                    gutterBottom
                    component="div"
                    align="start">
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      ml: '8px',
                      fontSize: '14px',
                      lineHeight: '150%',
                      fontWeight: 'regular',
                      mb: 0
                    }}
                    color="text.secondary">
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
