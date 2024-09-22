import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    iconDescription: 'Cultural Diversity',
    title: 'Cultural Diversity',
    description:
      'Timisoara boasts a rich cultural tapestry, influenced by Romanian, Hungarian, German, and Serbian heritage, reflected in its architecture, cuisine, and festivals.',
    imageLight: 'url("/static/images/templates/templates-images/dash-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <ConstructionRoundedIcon />,
    iconDescription: 'Historical Significance',
    title: 'Historical Significance',
    description:
      'Known as the place where the Romanian Revolution began in 1989, Timisoara played a pivotal role in the fall of communism in Romania.',
    imageLight: 'url("/static/images/templates/templates-images/mobile-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    iconDescription: 'Vibrant Arts Scene',
    title: 'Vibrant Arts Scene',
    description:
      'Designated as the European Capital of Culture for 2023, Timisoara showcases a vibrant arts scene with numerous theaters, museums, and cultural events.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    iconDescription: 'Architectural Diversity',
    title: 'Architectural Diversity',
    description:
      'Distinguished by its architectural diversity, Timisoara features historical squares and buildings that blend tradition with modernity.',
    imageLight: 'url("/static/images/templates/templates-images/building-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/building-dark.png")',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    iconDescription: 'Innovative Technology Sector',
    title: 'Innovative Technology Sector',
    description:
      'Recognized for its innovative technology sector, Timisoara is a dynamic hub for innovation and entrepreneurship.',
    imageLight: 'url("/static/images/templates/templates-images/technology-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/technology-dark.png")',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    iconDescription: 'Exceptional Hospitality',
    title: 'Exceptional Hospitality',
    description:
      'Visitors to Timisoara can expect exceptional hospitality, with warm welcomes and friendly locals enriching the overall experience.',
    imageLight: 'url("/static/images/templates/templates-images/people-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/people-dark.png")',
  },
];


export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Discover the essence of Timisoara: versatility, resilience, intuitive design, and pioneering spirit.
           Embrace steadfast assistance and meticulous craftsmanship in every aspect.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
