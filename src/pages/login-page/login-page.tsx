import React from 'react';
import { Link } from 'react-router-dom';


export const LoginPage: React.FC = () => {
    return (
        <>
            <p>Login</p>
            <Link to='/auth/registration'>Register</Link>
        </>
    )
};
