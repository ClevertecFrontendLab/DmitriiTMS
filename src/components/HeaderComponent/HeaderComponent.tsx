import React from 'react';
import { useWindowSize } from "@uidotdev/usehooks";

import styles from './HeaderComponent.module.css';

import { Layout, Typography, Button, Breadcrumb } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

export const HeaderComponent: React.FC = () => {

    const location = useLocation();

    const { width } = useWindowSize();

    const titleLinkPage = () => {
        if (location.pathname === '/main') {
            return <Breadcrumb.Item>Главная</Breadcrumb.Item>
        } else if (location.pathname === '/feedbacks') {
            return (
                <>
                    <Breadcrumb.Item>
                        <Link to='/main'>Главная</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/feedbacks'>Отзывы пользователей</Link>
                    </Breadcrumb.Item>
                </>
            )
        }else if (location.pathname === '/calendar') {
            return (
                <>
                    <>
                    <Breadcrumb.Item>
                        <Link to='/main'>Главная</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to='/calendar'>Календарь</Link>
                    </Breadcrumb.Item>
                </>
                </>
            )
        }
    }

    return (
        <Header className={styles.header}>
            <Breadcrumb>
                {titleLinkPage()}
            </Breadcrumb>
                <div className={ location.pathname === '/main' ? `${styles.headerContentTitleBlock}` : `${styles.headerContentTitleBlock} ${styles.calendarSetting}`}>
                {
                location.pathname === '/main' &&
                    <Title className={styles.headerTitle}>Приветствуем тебя в CleverFit —
                        приложении,  {width && width > 674 && width <= 834 ? <br /> : null}
                        которое поможет тебе добиться своей мечты!
                    </Title>
                }
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
