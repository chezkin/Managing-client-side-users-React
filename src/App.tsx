import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignINandUP from './containers/SignINandUP';
import { theme, fonts } from './utils/theme';

import './App.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <SignINandUP />
      {/* <Login /> */}
      {/* <SignUp /> */}
    </Container>
  );
}
