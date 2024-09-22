import * as React from 'react';
import { Button, PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../../../components/AppBarICAM.tsx';
import Hero2 from '../../../components/ICAM/Hero2.tsx';
import Features from '../../../components/ICAM/Features2.tsx';
import Testimonials from '../../../components/ICAM/Testimonials2.tsx';
import Footer from '../../../components/Footer.tsx';
import { useState } from "react";
import getLPTheme from '../../../assets/getLPTheme.tsx';

const Icam = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = React.useMemo(() => createTheme(getLPTheme(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Hero2 />
        <Box
          sx={{
            width: '100vw',
            overflow: 'hidden',
            bgcolor: 'background.default',
            background: (theme) =>
              theme.palette.mode === 'dark'
                ? 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' // example gradient for dark mode
                : 'linear-gradient(to right, #3471B8, #084371)', // degrade from #3471B8 to #084371 for light mode
          }}
        > 
          <Divider />
          <Divider />
          <Features />
          <Testimonials />
          <Footer />
        </Box>
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
          }}
        >
          <Button
            startIcon={<AutoAwesomeRoundedIcon />}
            variant="contained"
            onClick={toggleColorMode}
            sx={{
              backgroundColor: '#FBB900', // button color #FBB900
              '&:hover': {
                backgroundColor: '#E5A000', // darker shade for hover
              },
            }}
          >
            Toggle Theme
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Icam;
