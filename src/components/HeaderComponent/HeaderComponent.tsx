import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './HeaderComponent.module.css';

import { Layout, Typography, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { Text, Title } = Typography;

interface HeaderProps {
    subtitle: {
        main: string,
        calendar: string
    }
}

export const HeaderComponent: React.FC<HeaderProps> = ({ subtitle }) => {
    const location = useLocation();
    const routeTitle = () => {
        if (location.pathname === '/') {
            return subtitle.main;
        } else if (location.pathname === '/calendar') {
            return subtitle.calendar;
        }
    };
    return (
        <Header className={styles.header}>
            <Text className={styles.headerBreadcramp}>{routeTitle()}</Text>
            <div className={styles.headerContentTitleBlock}>
                <Title className={styles.headerTitle}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</Title>
                <div className={styles.settingBtnBlock}>
                    <Button className={styles.settingBtn} type="text" icon={<SettingOutlined className={styles.settingsImg} />}>Настройки</Button>
                    <div className={styles.settingImgWrapper}>
                        <SettingOutlined className={styles.settingsImgBtn} />
                    </div>

                </div>

            </div>
        </Header>
    )
};
