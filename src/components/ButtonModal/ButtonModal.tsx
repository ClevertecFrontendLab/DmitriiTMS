import React, { useState } from 'react';

import { Button, Modal, Form, Rate, Input } from 'antd';

export const ButtonModal: React.FC = () => {


    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const handleOk = () => {
        console.log('Данные собраны и отправлены');

        // setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 1000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal} style={{background: '#2F54EB'}}>
                Написать отзыв
            </Button>
            <Modal
                title="Ваш отзыв"
                centered={true}
                cancelButtonProps={{ style: { display: 'none' } }}
                maskStyle={{ backgroundColor: 'rgba(121,156,212, 0.5)', backdropFilter: 'blur(3px)' }}
                okText='Опубликовать'
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >

                <Form
                    name="validate_other"
                    onFinish={onFinish}
                >
                    <Form.Item name="rate">
                        <Rate />
                    </Form.Item>

                    <Form.Item
                        name="intro"
                        label="Intro"
                        rules={[{ required: true, message: 'Please input Intro' }]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={handleOk}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>


                {/* <p>{modalText}</p> */}
            </Modal>
        </div>
    )

}