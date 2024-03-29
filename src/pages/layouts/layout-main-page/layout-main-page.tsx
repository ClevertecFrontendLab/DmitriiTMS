import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { HeaderComponent } from '@components/HeaderComponent/HeaderComponent';
import { MenuComponent } from '@components/MenuComponent/MenuComponent';

import { Layout } from 'antd';
const { Content } = Layout;

import styles from './layout-main-page.module.css';


export const LayoutMainPage: React.FC = () => {

    const jwtLocalToken = localStorage.getItem('token');
    const jwtsessionToken = sessionStorage.getItem('token');

    const isAuth = jwtLocalToken || jwtsessionToken;

    useEffect(() => {
        window.onbeforeunload = function() {
            if(jwtsessionToken) {            
                sessionStorage.removeItem('token');
            }
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, [jwtsessionToken]);

    return (
        isAuth ?
            <Layout className={styles.wrapper}>
                <MenuComponent />
                <Layout>
                    <HeaderComponent />
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

            : <Navigate to="/auth" replace />
    );

};
