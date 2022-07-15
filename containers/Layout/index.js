import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box component='main' sx={{ paddingTop: '5rem' }}>
        {children}
      </Box>
    </>
  );
}

export default Layout;
