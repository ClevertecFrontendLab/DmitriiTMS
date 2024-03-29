import React from 'react';

import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;

import error from '../../assets/result/crow-error.svg'

import styles from './ResultErrorChangePassword.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { changePassword } from '@redux/actions/changePassword';
import { Loader } from '@components/Loader/Loader';



export const ResultErrorChangePassword: React.FC = () => {

    const loading = useSelector((state: RootState) => state.recover.loading);
    
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = async () => {
        history.back();
        const password = localStorage.getItem('password');
        const confirmPassword = localStorage.getItem('confirmPassword');
        if(password && confirmPassword) {
            await dispatch(changePassword({password, confirmPassword}))
        }
    }
    
    return (
        <>
        {loading && <Loader />}
        <div className={styles.loginErrorBlock}>
            <Image src={error} preview={false} style={{ marginBottom: '24px' }} />
            <Title level={3} style={{ fontWeight: '500', marginBottom: '0' }}>Данные не сохранились</Title>
            <Text type="secondary" style={{display: 'block', marginBottom: '16px', maxWidth: '368px'}}>Что-то пошло не так. Попробуйте ещё раз</Text>
            <button onClick={handleClick} className={styles.linkErrorNoexist} data-test-id='change-retry-button'>Повторить</button>
        </div>
        </>
        
    )
}
