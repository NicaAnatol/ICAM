// ThemeToggleButton.js
import React from 'react';
import { useThemeContext } from './theme-context.js';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ThemeToggleButton = () => {

  return <Typography variant="body2" color="text.primary">
  <Link to="/Robot">
  <Button variant="contained">Robot</Button>
</Link>
</Typography>
};

export default ThemeToggleButton;
