import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import CookieIcon from '@mui/icons-material/Cookie';

function AppAppBar() {
  return (
    <div>
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
    </div >
  );
}

export default AppAppBar;
