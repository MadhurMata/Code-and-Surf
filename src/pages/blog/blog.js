import React, { useContext, useEffect, useState } from 'react';
import { TreesContext } from 'App';

import { Grid } from '@mui/material';
import { HeaderBlog } from 'components/HeaderBlog/HeaderBlog';
import PostCard from 'components/postCard/PostCard';
import Loader from 'components/loader/Loader';
import ContactModal from 'components/modals/contactModal.js/ContactModal';
import BasicModal from 'components/basicModal/BasicModal';

const Blog = () => {
  const [posts] = useContext(TreesContext);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [successMesage, setSuccessMessage] = useState(false);
  const [errorMesage, setErrorMessage] = useState(false);

  const blogStyle = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#F2F3F4'
    }
  };

  useEffect(() => {
    if (posts) setIsPostsLoading(false);
  }, [posts]);

  return (
    <>
      <HeaderBlog setOpen={() => setOpen(true)} showPaginationArrows={false} />
      <Grid container sx={blogStyle.container}>
        {!isPostsLoading ? (
          posts?.map((item) => {
            return (
              <Grid key={item.id} item>
                <PostCard item={item} />;
              </Grid>
            );
          })
        ) : (
          <Loader />
        )}
      </Grid>
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
    </>
  );
};

export default Blog;
