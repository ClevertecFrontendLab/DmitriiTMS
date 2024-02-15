import React from 'react';
import { Outlet } from 'react-router-dom';


export const LayoutAuthPage: React.FC = () => {
    return (
        <>
            <p>CleverFit</p>
            <div>
                <Outlet />
            </div>
        </>
    )
};
