import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    color: '#fff',
  },
};

export default function AppFooter() {


  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ zIndex: 2, my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid item sx={{ display: 'flex' }}>
          <Box component="a" href="https://www.instagram.com/ifattosh/" sx={iconStyle}>
            <InstagramIcon />
          </Box>
        </Grid>
      </Container >
      <Box
        component="img"
        alt="suitcase"
        sx={{
          position: 'absolute',
          backgroundImage: 'url(https://www.linkpicture.com/q/vector-bakery-pattern-seamless-background-illustration-114148425.jpg)',
          width: '100%',
          height: '170px',
          opacity: 0.1,
        }} />
    </Typography >
  );
}
