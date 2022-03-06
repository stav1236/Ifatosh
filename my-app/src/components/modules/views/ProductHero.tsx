import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/system';

const backgroundImage =
  'https://www.linkpicture.com/q/d9ofgc5-62fcf15a-a393-44b1-8370-4a99629e3761.gif';

const cusmomerWhatsAppMsg = 'היי אפשר לעשות הזמנה למימונה'
const whatsappUrl = `https://api.whatsapp.com/send?phone=972526889238&text=${cusmomerWhatsAppMsg}`

const infoMsg = ' מופלטות ומתוקים למימונה וליום יום'
const locName = 'איסוף מראשון לציון'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#514a3c', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none', }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        מופלטות ומתוקים למימונה
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {infoMsg}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href={whatsappUrl}
        sx={{ minWidth: 200 }}
      >
        להזמנה
        <WhatsAppIcon />
      </Button>
      <Typography variant="h5" color="inherit" sx={{ mt: 2 }}>
        <b>{locName}</b>
      </Typography>
    </ProductHeroLayout>
  );
}
