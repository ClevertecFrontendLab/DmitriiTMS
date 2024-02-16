import React from 'react';
import { Button, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';


import styles from './register-page.module.css';


export const RegisterPage: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);

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

                    <Form.Item
                        name="repeatpassword"
                        rules={[{ required: true, message: '' }]}
                    >
                        <Input.Password placeholder='Повторите пароль' />
                    </Form.Item>
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
