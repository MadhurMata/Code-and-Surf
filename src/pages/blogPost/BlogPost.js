import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from 'api/contentfulApi';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import { Link, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { HeaderBlog } from 'components/HeaderBlog/HeaderBlog';
import ContactModal from 'components/modals/contactModal.js/ContactModal';
import BasicModal from 'components/basicModal/BasicModal';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      console.log('arrafo', node);
      return (
        <Typography
          sx={{
            margin: '2rem',
            fontSize: '18px',
            lineHeight: '150%',
            fontWeight: '400'
          }}>
          {children}
        </Typography>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      console.log('link', node);
      return <Link href={node.data.uri}>{children}</Link>;
    }
  }
};

const BlogPost = () => {
  const params = useParams();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  //const [isPostLoading, setIsPostLoading] = useState();
  const [post, setPost] = useState([]);
  const [open, setOpen] = useState(false);
  const [successMesage, setSuccessMessage] = useState(false);
  const [errorMesage, setErrorMessage] = useState(false);

  const blogStyle = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'max-content',
      gridColumnGap: '0px',
      gridRowGap: '0px',
      minHeight: '100vh',
      backgroundColor: '#F2F3F4'
    },
    imageContainer: {
      width: '100%',
      minHeight: '300px',
      backgroundImage: `url(${post.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    blogTitle: {
      margin: '2rem',
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.2,
      letterSpacing: '0.03em'
    }
  };

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const { fields } = rawData;
    const title = fields.title;
    const content = parseRichText(fields.content);
    const image = fields.image.fields.file.url;
    const updatedSlide = { title, content, image };

    setPost(updatedSlide);
  }, []);

  const getBlogs = useCallback(async () => {
    // setIsCarouselLoading(true);
    try {
      const response = await await client.getEntry(params.postId);
      if (response) cleanUpCarouselSlides(response);
      else setPost({});
      //setIsCarouselLoading(false);
    } catch (error) {
      console.log(error);
      //   setIsCarouselSlide(false);
    }
  }, []);

  const parseRichText = (rawRichTextField) => {
    console.log('first', documentToReactComponents(rawRichTextField, richTextOptions));
    return documentToReactComponents(rawRichTextField, richTextOptions);
  };

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <Box sx={blogStyle.container}>
      <Box>
        <HeaderBlog setOpen={() => setOpen(true)} />
      </Box>
      <Box sx={blogStyle.imageContainer}></Box>
      <Box sx={matches ? blogStyle.contentContainerSmall : blogStyle.contentContainer}>
        <Typography sx={blogStyle.blogTitle}>{post.title}</Typography>
        <Typography
          sx={{
            margin: '1rem',
            fontSize: '18px',
            lineHeight: '150%',
            fontWeight: '400'
          }}>
          {post.content}
        </Typography>
      </Box>
      <>
        <ContactModal
          open={open}
          title="Waiting List"
          onClose={() => setOpen(false)}
          setOpen={(open) => setSuccessMessage(open)}
          setErrorMessage={(open) => setErrorMessage(open)}
        />
        <BasicModal
          open={successMesage}
          onClose={() => setSuccessMessage(false)}
          title="Waiting List"
          content={`A member of our team will reach you as soon as possible`}
        />
        <BasicModal
          open={errorMesage}
          onClose={() => setErrorMessage(false)}
          title="Waiting List"
          content={
            'Oops, something went wrong. Please try again later or contact us by e-mail: info@codesurfbali.com'
          }
        />
      </>
    </Box>
  );
};

export default BlogPost;
