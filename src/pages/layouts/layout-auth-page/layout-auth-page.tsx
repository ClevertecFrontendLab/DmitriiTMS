import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';

import authLogo from '../../../assets/auth/auth-logo.png'

import styles from './layout-auth-page.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';



export const LayoutAuthPage: React.FC = () => {

    const loading = useSelector((state: RootState) => state.recover.loading);
    const loadingAuth = useSelector((state: RootState) => state.user.loading);

    const jwtLocalToken = localStorage.getItem('token');
    const jwtsessionToken = sessionStorage.getItem('token');

    const isAuth = jwtLocalToken || jwtsessionToken;


    return (
        !isAuth ?
            <>
                {loadingAuth || loading ? <Loader /> : <></>}
                <div className={styles.wrapperAuth}>
                    <div className={styles.wrapperAuthBlock}>
                        <div className={styles.wrapperAuthBlockImg}>
                            <img src={authLogo} alt="authLogo" />
                        </div>
                        <div className={styles.authLinkBlock}>
                            <CustomLink to='/auth'>Вход</CustomLink>
                            <CustomLink to='/auth/registration'>Регистрация</CustomLink>
                        </div>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>

            : <Navigate to="/main" replace />
    )

};
