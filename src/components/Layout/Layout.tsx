import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { MenuSidebar } from '@components/MenuSidebar/MenuSidebar';

import React from 'react';
import { Outlet } from 'react-router-dom';


export const Layout: React.FC = () => {

    return (
        <>
            <Header />
            <div>
                <div>
                    <MenuSidebar/>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
};
