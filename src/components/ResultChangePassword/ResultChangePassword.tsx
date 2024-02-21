import React from 'react';

import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

import success from '../../assets/result/success.svg'

import styles from './ResultChangePassword.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';


export const ResultChangePassword: React.FC = () => {

    const loading = useSelector((state: RootState) => state.recover.loading);

    const handleClick = () => {
        sessionStorage.clear();
        localStorage.clear();
    }

    return (
        <>
            {loading && <Loader />}
            <div className={styles.loginErrorBlock}>
                <Image src={success} preview={false} style={{ marginBottom: '24px' }} />
                <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Пароль успешно изменен</Title>
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px', maxWidth: '368px' }}>Теперь можно войти в аккаунт, используя свой логин и новый пароль</Text>
                <Link to='/auth' onClick={handleClick} className={styles.linkError} data-test-id='change-entry-button'>Вход</Link>
            </div>
        </>

    )
}
