import { LayoutForgot } from '@components/LayoutForgot/LayoutForgot';

import { Image } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
import VerificationInput from "react-verification-input";

import styles from './ConfirmEmail.module.css';

import confirmEmail from '../../assets/forgot/confirm-email.svg';
import crowError from '../../assets/result/crow-error.svg'
import { useState } from 'react';
import { codeVerification } from '@redux/actions/codeVerification';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';


export const ConfirmEmail: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const email = localStorage.getItem('email');
    const error = useSelector((state: RootState) => state.recover.errors?.statusCode);
    // const location = useSelector((state: RootState) => state.router.previousLocations);
    // const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);
    const loading = useSelector((state: RootState) => state.recover.loading);
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerificationInput = (code: string) => {
        if (error) {
            setVerificationCode('');
        }
        if (code && email) {
            dispatch(codeVerification({ email, code }))
        }
    };

    return (
        <>
            {loading ? <Loader /> : <></>}
            <LayoutForgot>
                <div className={styles.loginErrorBlock}>
                    <Image src={error === 200  ? confirmEmail  : crowError} preview={false} style={{ marginBottom: '24px' }} />
                    <Title level={3} style={{ fontWeight: '500', marginBottom: '0', maxWidth: '412px', lineHeight: '130%' }}>
                        {error === 200 ? <>Введите код <br />для восстановления аккаунта </>
                            : <>Неверный код. Введите код <br /> для восстановления аккаунта</>
                        }
                    </Title>
                    <Text type="secondary" style={{ display: 'inline-block', marginBottom: '16px', maxWidth: '412px' }}>Мы отправили вам на e-mail &nbsp;<span style={{ fontWeight: '600' }}>{email}</span>&nbsp;шестизначный код. Введите его в поле ниже</Text>
                    <VerificationInput
                        value={verificationCode}
                        onChange={setVerificationCode}
                        onComplete={handleVerificationInput}
                        inputProps={{ 'data-test-id': 'verification-input' }}
                        placeholder=''
                        classNames={{
                            container: "container",
                            character: `character ${error === 200 ? '' : 'bgc'}`,
                            characterInactive: "character--inactive",
                            characterSelected: "character--selected",
                            characterFilled: "character--filled",
                        }}
                    />
                    <Text type="secondary" style={{ display: 'block', maxWidth: '368px', margin: '0 auto' }}>Не пришло письмо? Проверьте папку Спам.</Text>
                </div>
            </LayoutForgot>
        </>
    )
}


