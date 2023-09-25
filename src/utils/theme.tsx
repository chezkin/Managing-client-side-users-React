// styles.tsx

import { createTheme } from '@mui/material/styles';

// פלטטת צבעים
export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',  
    },
    error: {
      main: 'red.A400', 
    },
  },
});

// פונטים 
export const fonts = {
  regular: 'Roboto, sans-serif',
  title: 'Roboto Slab, serif',  
};

// קומפוננטת כפתור
import React from 'react';
import { Button } from '@mui/material';

interface MyButtonProps {
  children: React.ReactNode;
}

