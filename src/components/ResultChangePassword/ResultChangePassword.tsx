import React from 'react';

import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

import success from '../../assets/result/success.svg'

import styles from './ResultChangePassword.module.css';
import { Link } from 'react-router-dom';


export const ResultChangePassword: React.FC = () => {


    const handleClick = () => {
        sessionStorage.clear();
        localStorage.clear();
    }

    return (
        <div className={styles.loginErrorBlock}>
            <Image src={success} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Пароль успешно изменен</Title>
            <Text type="secondary" style={{display: 'block', marginBottom: '16px', maxWidth: '368px'}}>Теперь можно войти в аккаунт, используя свой логин и новый пароль</Text>
            <Link to='/auth' onClick={handleClick} className={styles.linkError}>Вход</Link>
        </div>
    )
}
