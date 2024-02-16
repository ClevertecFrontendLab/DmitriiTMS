import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWindowSize } from "@uidotdev/usehooks";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeartFilled,
    TrophyFilled,
    ProfileOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button, Image } from 'antd';
const { Sider } = Layout;

import exit from '../../assets/icons/exit.svg';
import calen from '../../assets/icons/calendar.svg'

import styles from './MenuComponent.module.css';



export const MenuComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const { width } = useWindowSize();

    const logout = () => {
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('login');
        navigate('/auth');
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
            className={!collapsed ? styles.menu : `${styles.menu} ${styles.menuHide}`}>
            <div className={styles.menuWrapper}>
                <div className={styles.menuWrapperItem}>
                    <Link to="/main" className={styles.menuLogo}>
                        <div className={!collapsed ? styles.logo : styles.logoSmall} />
                    </Link>
                    <Menu
                        mode="inline"
                        inlineIndent={10}
                        selectable={false}
                        items={[
                            {
                                key: '1',
                                icon: <Link to='/main/calendar'><Image preview={false}  width={16} src={calen} alt='calendar'/></Link>,
                                label: <Link to='/main/calendar' className={!collapsed ? styles.opent : styles.hidet}>Календарь</Link>,
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
                        data-test-id={width && width < 400 ? 'sider-switch-mobile' : 'sider-switch'}
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
                    <button className={styles.menuWrapperItemExit} onClick={logout}>
                        <img className={collapsed ? styles.exitImg : styles.exitImgHide} src={exit} alt="exit" />
                        <span className={!collapsed ? styles.open : styles.hide}>Выход</span>
                    </button>
                </div>
            </div>

        </Sider>
    );
};
