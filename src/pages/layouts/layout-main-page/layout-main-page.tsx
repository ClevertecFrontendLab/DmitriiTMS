import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '@components/HeaderComponent/HeaderComponent';
import { MenuComponent } from '@components/MenuComponent/MenuComponent';

import { Layout } from 'antd';
const { Content } = Layout;

import styles from './layout-main-page.module.css';


export const LayoutMainPage: React.FC = () => {

    const headerTitle = {
        main: 'Главная',
        calendar: 'Календарь'
    }

    return (
        <Layout className={styles.wrapper}>
            <MenuComponent />
            <Layout>
                <HeaderComponent subtitle={headerTitle} />

                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
