import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';

import authLogo from '../../../assets/auth/auth-logo.png'
import miniauthLogo from '../../../assets/result/mini-logo.svg'

import styles from './layout-auth-page.module.css';
import { useSelector } from 'react-redux';
import { RootState} from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';
import { ResultErrorChangePassword } from '@components/ResultErrorChangePassword/ResultErrorChangePassword';


export const LayoutAuthPage: React.FC = () => {


    const loading = useSelector((state: RootState) => state.recover.loading);
    const loadingAuth = useSelector((state: RootState) => state.user.loading);

    const jwtLocalToken = localStorage.getItem('token');
    const jwtsessionToken = sessionStorage.getItem('token');

    const isAuth = jwtLocalToken || jwtsessionToken;

    const recoverError = localStorage.getItem('recoverError');

        
    if (recoverError) {
        return (
            <div className={styles.wrapperAuth}>
                <ResultErrorChangePassword/>
            </div>
        )
    }


    return (
        !isAuth ?
            <>
                {loadingAuth || loading ? <Loader /> : <></>}
                <div className={styles.wrapperAuth}>
                    <div className={styles.wrapperAuthBlock}>
                        <div className={styles.wrapperAuthBlockImg}>
                            <img className={styles.logoBig} src={  authLogo } alt="authLogo" />
                            <img className={styles.logomini} src={ miniauthLogo} alt="authLogo" />
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
