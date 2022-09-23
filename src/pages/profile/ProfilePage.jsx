import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profilepage = ({user}) => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigateTo('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    );
}

export default Profilepage;
