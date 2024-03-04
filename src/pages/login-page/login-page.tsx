import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import styles from './login-page.module.css';

import { AppDispatch, RootState } from '@redux/configure-store';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '@redux/actions/login';
import { checkEmail } from '@redux/actions/checkEmail';
import { push } from 'redux-first-history';

import { Typography } from 'antd';
import { useWindowSize } from '@uidotdev/usehooks';
const { Text } = Typography;


interface FormLogin {
    email: string,
    password: string,
    remember: boolean
}

export const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const { width } = useWindowSize();
    const dispatch = useDispatch<AppDispatch>();
    const ErrorStatusCode = useSelector((state: RootState) => state.user.errors.statusCode);


    const fetchUser = async (email: string, password: string, checked: boolean) => {
        await dispatch(loginUser({ email, password, checked }));
    }


    const onFinish = (values: FormLogin) => {
        fetchUser(values.email, values.password, values.remember);
    };

    const clickForgotPassword = async () => {
        if (email) {
            await dispatch(checkEmail({ email }));
        }
    }

    const handleGoogleLogin = () => {
        window.location.href = 'https://marathon-api.clevertec.ru/auth/google';
      };


    useEffect(() => {
        if (ErrorStatusCode && ErrorStatusCode !== 200) {
            dispatch(push('/result/error-login'))
        }

    }, [dispatch, ErrorStatusCode])


    return (
        <>
            <div className={styles.formLogin}>

                <Form
                    name="basic"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                >
                    <div className={styles.formInputBlock}>
                        <Form.Item
                            data-test-id='login-email'
                            name="email"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: ''
                                    },
                                    {
                                        validator(_, value) {
                                            if (String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                                                setEmail(value);
                                                return Promise.resolve();
                                            } else {
                                                setEmail('')
                                                return Promise.reject();
                                            }
                                        },
                                    }
                                ]
                            }
                        >
                            <Input addonBefore='e-mail' />
                        </Form.Item>

                        <Form.Item
                            data-test-id='login-password'
                            name="password"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: ''
                                    },
                                    {
                                        validator(_, value) {
                                            if (String(value).match(/(?=.*[0-9]{1,})(?=.*[a-z]{1,})(?=.*[A-Z]{1,})^[a-zA-Z0-9]{8,}$/)) {
                                                return Promise.resolve();
                                            } else {
                                                return Promise.reject();
                                            }
                                        },
                                    }
                                ]
                            }
                        >
                            <Input.Password placeholder='Пароль'  />
                        </Form.Item>
                    </div>

                    <div className={styles.formTextBlock}>
                        <Form.Item className={styles.checkboxItem} name="remember" valuePropName="checked">
                            <Checkbox defaultChecked={false} data-test-id='login-remember'>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Text className={styles.linkPassword} onClick={clickForgotPassword} data-test-id='login-forgot-button'>Забыли пароль?</Text>
                    </div>

                    <Form.Item data-test-id='login-submit-button'>
                        <Button type="primary" htmlType="submit" style={{ background: '#2F54EB', border: '1px solid #2F54EB', width: '100%' }} >
                            Войти
                        </Button>
                    </Form.Item>

                    <Button onClick={handleGoogleLogin} icon={width && width < 600 ? '' : <GooglePlusOutlined />} style={{ width: '100%' }}>
                        Войти через Google
                    </Button>
                </Form>
            </div>
        </>
    );
};
