import React from 'react';
import { useNavigate, useLocation } from 'react-router';


const Homepage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('We are in Route:', location.pathname); // '/about | /faqs'

    const navigated = (path) => {
        navigate(path);
    }

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true', // Query Params
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigateProps('/online-state')}>
                Go To Page with State / Query Params
            </button>
            <button onClick={() => navigated('/profile')}>
                Go To Profile
            </button>
        </div>
    );
}

export default Homepage;
