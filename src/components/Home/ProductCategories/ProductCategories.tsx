import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from 'UI/Typography/Typography';
import Link from '@mui/material/Link';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://www.linkpicture.com/q/Screenshot_1_210.png',
    title: 'יאמי',
    width: '40%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_2_54.png',
    title: 'טעיים',
    width: '20%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_3_87.png',
    title: 'מעולה',
    width: '40%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_4_69.png',
    title: 'מתוק',
    width: '38%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_5_26.png',
    title: 'מעולה',
    width: '38%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_6_43.png',
    title: 'נהדר',
    width: '24%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_7_42.png',
    title: 'בתאבון',
    width: '40%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_8_39.png',
    title: 'מהממם',
    width: '20%',
  },
  {
    url: 'https://www.linkpicture.com/q/Screenshot_9_29.png',
    title: 'נהדר',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" color='text.secondary'>
        לחצי על התמונה בכדי להגיע לאינסטגרם המהממם שלנו
      </Typography>
      <Link href='https://www.instagram.com/ifattosh/'>
        <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </ImageIconButton>
          ))}
        </Box>
      </Link>
    </Container>
  );
}
