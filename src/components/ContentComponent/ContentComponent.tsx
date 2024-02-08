import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '@components/HeaderComponent/HeaderComponent';
import { MenuComponent } from '@components/MenuComponent/MenuComponent';
import { FooterComponent } from '@components/FooterComponent/FooterComponent';

import { Layout } from 'antd';
const { Content } = Layout;

import styles from './ContentComponent.module.css';


export const ContentComponent: React.FC = () => {

    return (
        <Layout className={styles.wrapper}>
            <MenuComponent />
            <Layout>
                <HeaderComponent />

                <Content>
                    <Outlet />
                </Content>

                <FooterComponent />
            </Layout>
        </Layout>
    );
};
