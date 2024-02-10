import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeartFilled,
    CalendarOutlined,
    TrophyFilled,
    ProfileOutlined
} from '@ant-design/icons';

import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;

import exit from '../../assets/icons/exit.svg';

import styles from './MenuComponent.module.css';

export const MenuComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
            className={!collapsed ? styles.menu : `${styles.menu} ${styles.menuHide}`}>
            <div className={styles.menuWrapper}>
                <div className={styles.menuWrapperItem}>
                    <Link to="/" className={styles.menuLogo}>
                        <div className={!collapsed ? styles.logo : styles.logoSmall} />
                    </Link>
                    <Menu
                        mode="inline"
                        inlineIndent={10}
                        selectable={false}
                        items={[
                            {
                                key: '1',
                                icon: <CalendarOutlined style={{ color: "#061178" }} />,
                                label: <Link to='/calendar'>Календарь</Link>,
                            },
                            {
                                key: '2',
                                icon: <HeartFilled style={{ color: "#061178" }} />,
                                label: <Link to='/trening'>Тренировки</Link>,
                            },
                            {
                                key: '3',
                                icon: <TrophyFilled style={{ color: "#061178" }} />,
                                label: <Link to='/trening'>Достижения</Link>,
                            },
                            {
                                key: '4',
                                icon: <ProfileOutlined style={{ color: "#061178" }} />,
                                label: <Link to='/trening'>Профиль</Link>,
                            },
                        ]}
                    />

                    <div className={styles.btnTrap}
                        onClick={() => setCollapsed(!collapsed)}
                        data-test-id='sider-switch sider-switch-mobile'
                    >
                        <Button
                            type='link'
                            icon={collapsed ? <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                                : <MenuFoldOutlined style={{ color: '#8C8C8C' }} />}
                            className={styles.sidebarBtn}
                        />
                    </div>
                </div>
                <div className={styles.menuWrapperItemExitBlock}>
                    <Link className={styles.menuWrapperItemExit} to="/">
                        <img className={collapsed ? styles.exitImg : styles.exitImgHide} src={exit} alt="exit" />
                        <span className={!collapsed ? styles.open : styles.hide}>Выход</span>
                    </Link>
                </div>
            </div>

        </Sider>
    );
};
