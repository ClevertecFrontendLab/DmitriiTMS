import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import styles from './login-page.module.css';

import { AppDispatch, RootState } from '@redux/configure-store';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '@redux/actions/login';
import { checkEmail } from '@redux/actions/checkEmail';
import { push } from 'redux-first-history';
import { Loader } from '@components/Loader/Loader';


interface FormLogin {
    email: string,
    password: string,
    remember: boolean
}

export const LoginPage: React.FC = () => {

    const [email, setEmail] = useState('');

    const loadingAuth = useSelector((state: RootState) => state.user.loading);

    const dispatch = useDispatch<AppDispatch>();
    const ErrorStatusCode = useSelector((state: RootState) => state.user.errors.statusCode);

    const fetchUser = async (email: string, password: string, checked: boolean) => {
        await dispatch(loginUser({ email, password, checked }));
    }


    const onFinish = (values: FormLogin) => {
        console.log('Success:', values);
        fetchUser(values.email, values.password, values.remember);
    };

    const clickForgotPassword = async () => {
        if(email) {
            console.log(email);
            await dispatch(checkEmail({email}));
        }
    }

    useEffect(() => {
        if (ErrorStatusCode && ErrorStatusCode !== 200) {
            dispatch(push('/result/error-login'))
        }

    }, [dispatch, ErrorStatusCode])

    return (
        <>
            {loadingAuth && <Loader />}
            <div className={styles.formLogin}>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <div className={styles.formInputBlock}>
                        <Form.Item
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
                            name="password"
                            rules={
                                [
                                    {
                                        required: true,
                                        message: ''
                                    },
                                ]
                            }
                        >
                            <Input.Password placeholder='Пароль' />
                        </Form.Item>
                    </div>

                    <div className={styles.formTextBlock}>
                        <Form.Item className={styles.checkboxItem} name="remember" valuePropName="checked">
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Button className={styles.linkPassword} onClick={clickForgotPassword}>Забыли пароль?</Button>
                    </div>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" style={{ background: '#2F54EB', border: '1px solid #2F54EB', width: '100%' }}>
                            Войти
                        </Button>
                    </Form.Item>

                    <Button icon={<GooglePlusOutlined />} style={{ width: '100%' }}>
                        Войти через Google
                    </Button>
                </Form>
            </div>
        </>
    );
};
