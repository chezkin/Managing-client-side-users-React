import React from 'react';
import {Button}  from '@mui/material';


const clientID = '712957607994-ji3ddn5pgmuh29uom17d39fvftft5bld.apps.googleusercontent.com'

type Props = {}

const LogoutGoogle = (props: Props) => {
    return(
        <Button variant='contained'>logout with google</Button>
    )
}

export default LogoutGoogle