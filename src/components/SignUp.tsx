import React from 'react';
import {
    Typography, Avatar, Button, Checkbox, Grid,
    Paper, TextField, Link, FormControl, FormLabel,
    RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import LoginGoogle from './LoginGoogle';
import SignupForm from './SignUpForm';

type Props = {};

const SignUp = (props: Props) => {
    const paperStyle = { padding: 20, margin: '0 auto' };
    const avatarStyle = { backgroundColor: 'green' };
    const headerStyle = { margin: '0' };
    const marginTop = { marginTop:5}
    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid container direction="column" alignItems="center"  >
                    <Avatar style={avatarStyle}>
                        <PersonAddAltSharpIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>
                        Please fill this form to create an account!
                    </Typography>
                </Grid>
               <SignupForm/>
            </Paper>
        </Grid>
    )
};

export default SignUp;