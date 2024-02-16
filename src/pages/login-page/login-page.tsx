import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

import axios, { AxiosError } from 'axios';

import styles from './login-page.module.css';
import { Link, useNavigate } from 'react-router-dom';

interface AuthLogin {
    email: string,
    password: string,
    remember: boolean
}

interface LoginResponse {
    accessToken: string
}

export const LoginPage: React.FC = () => {

    const navigate = useNavigate();

    const onFinish = async (values: AuthLogin) => {
        // console.log('Success:', values);
        try {
            const { data } = await axios.post<LoginResponse>('https://marathon-api.clevertec.ru/auth/login', {
                email: values.email,
                password: values.password
            },
            );
            console.log(data);

            sessionStorage.setItem('login', 'true');
            if (values.remember) {
                localStorage.setItem('jwt', data.accessToken);
            }
            navigate('/main');
        } catch (e) {
            if (e instanceof AxiosError) {
                console.log(e.response?.data.message);

            }
        }


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <div className={styles.formLogin}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className={styles.formInputBlock}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input addonBefore='e-mail' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input.Password placeholder='Пароль' />
                    </Form.Item>
                </div>

                <div className={styles.formTextBlock}>
                    <Form.Item className={styles.checkboxItem} name="remember" valuePropName="checked">
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Link className={styles.linkPassword} to='/auth'>Забыли пароль?</Link>
                </div>

                <Form.Item >
                    <Button type="primary" htmlType="submit" style={{ background: '#2F54EB', border: '1px solid #2F54EB', width: '100%' }}>
                        Войти
                    </Button>
                </Form.Item>

                <Button icon={<GooglePlusOutlined />} style={{width: '100%'}}>
                    Войти через Google
                </Button>
            </Form>
        </div>

    );
};
