import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  const matches = useMediaQuery('(max-width:900px)');
  const continerWidth = matches ? '1200px' : '500px'


  return (
    <>
      <Box
        component="section"
        sx={{
          height: continerWidth,
          display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light'
        }}>
        <Box
          component="img"
          alt="suitcase"
          sx={{
            position: 'absolute',
            backgroundImage: 'url(https://www.linkpicture.com/q/vector-bakery-pattern-seamless-background-illustration-114148425.jpg)',
            width: '100%',
            height: continerWidth,
            opacity: 0.1,
          }} />
        <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="https://www.linkpicture.com/q/מאפה.png"
                  alt="מאפה"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  עוגיות מרוקאיות
                </Typography>
                <Typography variant="h5">
                  {
                    'עוגיות מרוקאיות בכל ימות השנה '
                  }
                  {
                    'מתאים למימונה, שבת חתן, אירועים וכו. '
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="https://www.linkpicture.com/q/מערוך.png"
                  alt="מערוך"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  מופלטות
                </Typography>
                <Typography variant="h5">
                  {
                    'רק כאן תכלו למצוא מופלטות נהדרות '
                  }
                  {'תוצרת בית שמגעיות אליכן חמות וטעימות. '}
                  {'(מוגש בתוספת חמאה ודבש)'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="https://www.linkpicture.com/q/כובע.png"
                  alt="כובע שף"
                  sx={{ height: 55 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  סדנאות אפייה
                </Typography>
                <Typography variant="h5">
                  {'סדנאות אישיות וקבצתיות שבסופן '}
                  {'תצאו עם ידע נרחב ותעודה מקצועית '}
                  {'מטעם יפעתוש מתוקים.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProductValues;
