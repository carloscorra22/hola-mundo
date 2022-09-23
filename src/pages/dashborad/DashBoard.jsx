import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/copyright';

const DashBoard = () => {

    const navegate = useNavigate();

    const logout= () => {
        navegate('/login')

    }
    return (
        <div className='d-flex justify-content-center'>
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>            
        </div>

            <div>
            <Copyright></Copyright>                
            </div>

        </div>
    );
}

export default DashBoard;
