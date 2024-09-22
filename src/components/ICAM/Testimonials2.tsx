import React from 'react';
import { Container, Grid, Card, CardHeader, CardContent, Typography, Box, useTheme, Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const timisoaraTestimonials = [
  // Replace these with actual testimonials and corresponding images
  {
    avatar: <Avatar alt="Visitor 1" src="/path/to/visitor1.jpg" />,
    name: 'John Doe',
    occupation: 'Travel Blogger',
    testimonial:
    "Attending UVT has been an incredible experience. The campus is modern and well-equipped, the professors are knowledgeable and supportive, and the academic programs are top-notch. I couldn't have asked for a better university.",
  },
    {
    avatar: <Avatar alt="Visitor 2" src="/path/to/visitor2.jpg" />,
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial:
    "UVT is not just a university, it's a community. The campus is buzzing with student life, from academic events to cultural activities. The friendly atmosphere makes it easy to make friends and feel at home, even if you're from out of town.",
  },
  {
    avatar: <Avatar alt="Visitor 3" src="/path/to/visitor3.jpg" />,
    name: 'Visitor Three',
    occupation: 'Food Critic',
    testimonial:
    "Studying at UVT has opened doors for me that I never thought possible. The university has strong ties with industry partners, providing ample opportunities for internships and job placements. I feel confident in my future thanks to the education I've received here.",
  },
  {
    avatar: <Avatar alt="Visitor 4" src="/path/to/visitor4.jpg" />,
    name: 'Visitor Four',
    occupation: 'Musician',
    testimonial:
    "UVT's commitment to research excellence is evident in every aspect of the university. The faculty members are conducting groundbreaking research in their respective fields, and students have the opportunity to get involved through various research programs. It's inspiring to be part of such a dynamic academic environment.",
  },
  {
    avatar: <Avatar alt="Visitor 5" src="/path/to/visitor5.jpg" />,
    name: 'Visitor Five',
    occupation: 'Entrepreneur',
    testimonial:
    "I transferred to UVT midway through my undergraduate studies, and it was the best decision I ever made. The university offers a wide range of academic programs, flexible scheduling options, and personalized support services to help students succeed. I've thrived academically and personally since coming here.",
  },
  {
    avatar: <Avatar alt="Visitor 6" src="/path/to/visitor6.jpg" />,
    name: 'Visitor Six',
    occupation: 'History Buff',
    testimonial:
    "As a graduate student at UVT, I've been impressed by the resources and support available for research. The university has state-of-the-art laboratories, access to funding opportunities, and experienced mentors who guide students every step of the way. I feel privileged to be part of such a thriving research community.",
  }
  // ... add the rest of the testimonials in a similar fashion
];

const whiteLogos = [
  // ... (your white logo URLs)
];

const darkLogos = [
  // ... (your dark logo URLs)
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();

  // Add any click handler functionality you need
  const handleCardClick = (index) => {
    console.log(`Testimonial ${index} clicked`);
    // Implement any action on click, e.g., opening a modal or changing a state
  };

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experience Uvt's charm through glowing testimonials! Visitors love our vibrant culture, 
          historic beauty, and innovative vibe. Known for exceptional hospitality, Timisoara offers memorable 
          experiences, combining tradition with modernity.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {timisoaraTestimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              raised
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: theme.shadows[10],
                },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(index)}
            >
              <CardHeader
                avatar={testimonial.avatar}
                title={testimonial.name}
                subheader={testimonial.occupation}
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
                <Rating
                  name={`testimonial-rating-${index}`}
                  value={5}
                  readOnly
                  precision={0.5}
                  icon={<StarIcon fontSize="inherit" />}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}