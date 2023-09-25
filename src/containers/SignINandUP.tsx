import React from 'react';
import {Tabs, Tab, Box, Typography, Avatar, Button, Checkbox, 
    Grid, Paper, TextField, Link } from '@mui/material';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { theme, fonts } from '../utils/theme'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  

  

type Props = {}

const SignINandUP = (props: Props) => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const paperStyle = { width: 300, margin: '20px auto' };
  return (
    <Paper elevation={20} style={paperStyle}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Sign in" />   
      <Tab label="Sign Up" />
    </Tabs>
    <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUp/>
      </TabPanel>
    </Paper>
  );
}

export default SignINandUP