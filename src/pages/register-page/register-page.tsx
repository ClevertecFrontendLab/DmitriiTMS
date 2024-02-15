import React from 'react';
import { Link } from 'react-router-dom';


export const RegisterPage: React.FC = () => {
    return (
        <>
            <p>Register</p>
            <Link to='/auth'>Login</Link>
        </>
    )
};
