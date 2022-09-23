import React from 'react';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Copyright = () => {
    return (

        <Typography variant='body2' color="GrayText" align='center'>
        {'Copyright 2022'}
        <Link color="inherit" height={"https://imaginaformacion.com"}>
            imagina formacion
        </Link>

        </Typography>
    );
}

export default Copyright;
