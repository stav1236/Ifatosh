import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from 'UI/AppBar/AppBar';
import CookieIcon from '@mui/icons-material/Cookie';
import Toolbar from 'UI/ToolBar/Toolbar';

const AppAppBar = () => {
  return (
    <>
      <AppBar position="fixed" color='primary'>
        <Toolbar sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Link
            variant="h6"
            underline="none"
            color='text.primary'
            href="/"
            sx={{ fontSize: 36, fontWeight: 'bold' }}
          >
            <>
              יפעתוש
              <CookieIcon />
            </>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ >
  );
}

export default AppAppBar;
