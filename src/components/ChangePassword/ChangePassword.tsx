/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';

import styles from './ChangePassword.module.css';
import { Loader } from '@components/Loader/Loader';
import { LayoutForgot } from '@components/LayoutForgot/LayoutForgot';
import { changePassword } from '@redux/actions/changePassword';
import { useRedirect } from '@components/ConfirmEmail/helpers/useRedirect';


export const ChangePassword: React.FC = () => {

    const loadingReg = useSelector((state: RootState) => state.user.loading);
    const location = useSelector((state: RootState) => state.router.previousLocations);
    const currentLocation = useSelector((state: RootState) => state.router.location?.pathname);

    const dispatch = useDispatch<AppDispatch>();

    const [isValid, setIsValid] = useState({
        password: false,
        confirmPassword: false
    })

    const validForm = isValid.password && isValid.confirmPassword;

    useRedirect('/auth/change-password', '/auth/confirm-email', '2', '/result/error-change-password', location, currentLocation);

    const fetchData = async (password: string, confirmPassword: string) => {
        await dispatch(changePassword({ password, confirmPassword }));
    }

    const onFinish = (values: {password: string, confirmPassword: string, }) => {
        const { password, confirmPassword } = values;

        localStorage.setItem('password', password);
        localStorage.setItem('confirmPassword', confirmPassword);
        fetchData(password, confirmPassword);
    };

    return (
        <LayoutForgot>
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
                            style={{ marginBottom: '40px' }}

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
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LayoutForgot>


    );
};
