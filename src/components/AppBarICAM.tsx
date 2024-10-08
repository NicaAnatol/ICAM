import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode.tsx';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const logoStyle = {
  width: '60px',
  height: 'auto',
  cursor: 'pointer',
  marginRight: '15px',
  marginLeft: '12px',
};

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBarICAM({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link to="/">
                <img
                  src={logo}
                  style={logoStyle}
                  alt="logo of sitemark"
                />
              </Link>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={() => scrollToSection('features')} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    About ICAM
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('testimonials')} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    Testimonials
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('highlights')} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    Highlights
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => scrollToSection('te')} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleDialogOpen} sx={{ py: '6px', px: '12px' }}>
                  <Typography variant="body2" color="text.primary">
                    <Button variant="contained">Navigation</Button>
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '300px',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('features')}>Features</MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>Testimonials</MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>Highlights</MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>Pricing</MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleDialogOpen} sx={{ py: '6px', px: '12px' }}>
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: '100%' }}
                    >
                      Navigation
                    </Button>
                  </MenuItem>
                  
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="xl" fullWidth>
        <DialogContent sx={{ p: 0 }}>
          <iframe
            src="https://app.mappedin.com/map/66dad2715ef57f000ca23855?floor=m_bfcc896c851dec8e"
            style={{ width: '100%', height: '800px', border: 'none' }}
            title="Navigation Map"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AppAppBarICAM;
