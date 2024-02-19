import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';

import styles from './register-page.module.css';
import { registerUser } from '@redux/actions/register';
import { Loader } from '@components/Loader/Loader';


export const RegisterPage: React.FC = () => {

    const loadingReg = useSelector((state: RootState) => state.user.loading);

    const dispatch = useDispatch<AppDispatch>();

    const [isValid, setIsValid] = useState({
        email: false,
        password: false,
        confirmPassword: false
    })

    const validForm = isValid.email && isValid.password && isValid.confirmPassword;   

    const fetchData = async (email: string, password: string) => {
        await dispatch(registerUser({ email, password }));
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const { email, password } = values;
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        fetchData(email, password); 
    };

    return (
        <>
        {loadingReg && <Loader />}
        <div className={styles.formLogin}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
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
                                            setIsValid((prev) => ({
                                                ...prev,
                                                email: true
                                            }))
                                            return Promise.resolve();
                                        } else {
                                            setIsValid((prev) => ({
                                                ...prev,
                                                email: false
                                            }))
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
                        help={<span style={{ fontSize: '12px' }}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>}
                        rules={
                            [
                                {
                                    required: true,
                                    message: ''
                                },
                                {
                                    validator(_, value) {
                                        if (String(value).match(/(?=.*[0-9]{1,})(?=.*[A-Z]{1,})^[a-zA-Z0-9]{8,}$/)) {
                                            setIsValid((prev) => ({
                                                ...prev,
                                                password: true
                                            }))
                                            return Promise.resolve(<span style={{ fontSize: '12px' }}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>);
                                        } else {
                                            setIsValid((prev) => ({
                                                ...prev,
                                                password: false
                                            }))
                                            return Promise.reject();
                                        }
                                    },
                                }
                            ]
                        }
                        style={{marginBottom: '40px'}}

                    >
                        <Input.Password placeholder='Пароль' />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={
                            [
                                {
                                    required: true,
                                    message: ''
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            setIsValid((prev) => ({
                                                ...prev,
                                                confirmPassword: true
                                            }))
                                            return Promise.resolve();
                                        } else {
                                            setIsValid((prev) => ({
                                                ...prev,
                                                confirmPassword: false
                                            }))
                                            return Promise.reject('Пароли не совпадают');
                                        }
                                        
                                    }
                                })
                            ]
                        }
                    >
                        <Input.Password placeholder='Повторите пароль' />
                    </Form.Item>
                </div>

                <Form.Item >
                    <Button type="primary" htmlType="submit" disabled={!validForm ? true : false} className={styles.regBtn}>
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
