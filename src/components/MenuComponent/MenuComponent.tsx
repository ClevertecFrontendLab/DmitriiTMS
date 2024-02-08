import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;

import styles from './MenuComponent.module.css';


export const MenuComponent: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link to='/'>Logo</Link>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <Link to='/calendar'>Календарь</Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <Link to='/trening'>Тренировки</Link>,
                        },
                    ]}
                />
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    className={styles.sidebarBtn}
                />
            </Sider>

        </>

    );
};
