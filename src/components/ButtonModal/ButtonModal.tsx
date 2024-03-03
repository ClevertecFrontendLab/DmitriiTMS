import React, { useState } from 'react';

import { Button, Modal, Form, Rate, Input } from 'antd';
import { feedbackPost } from '@redux/actions/feedbackPost';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/configure-store';
import { feedbacksAsync } from '@redux/actions/feedback';


interface sdfsgsg {
    openModal2: boolean,
    getCloselError2: () => void
}

export const ButtonModal: React.FC<sdfsgsg> = ({ openModal2, getCloselError2 }) => {

    const dispatch = useDispatch<AppDispatch>();

    const [open, setOpen] = useState(false);
    const [rateText, setRateText] = useState({
        rating: 0,
        message: ''
    })

    const getRate = (val: number) => {
        setRateText((prev) => ({
            ...prev,
            rating: val
        }))

        localStorage.setItem('rate', String(val))
    }

    const getText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRateText((prev) => ({
            ...prev,
            message: e.target.value
        }))

        localStorage.setItem('message', e.target.value)
    };

    const handleOk = async () => {
        getCloselError2();
        console.log('Данные собраны и отправлены');
        await dispatch(feedbackPost({
            rating: rateText.rating,
            message: rateText.message
        }))
        await dispatch(feedbacksAsync());
        setOpen(false);

    };

    const showModalReviews = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
        getCloselError2();
    };

    return (
        <div>
            <Button type="primary" onClick={showModalReviews} style={{ background: '#2F54EB' }} data-test-id='write-review'>
                Написать отзыв
            </Button>
            <Modal
                title="Ваш отзыв"
                centered={true}
                cancelButtonProps={{ style: { display: 'none' } }}
                maskStyle={{ backgroundColor: 'rgba(121,156,212, 0.5)', backdropFilter: 'blur(3px)' }}
                open={open || openModal2}
                onCancel={handleCancel}
                footer={
                    [<Button type="primary" key="submit"
                    onClick={handleOk}
                    disabled={rateText.rating || localStorage.getItem('rate') ? false : true}
                    data-test-id='new-review-submit-button'>
                        Опубликовать
                    </Button>,]
                }
            >

                <Form
                    name="validate_other"
                >
                    <Form.Item name="rate">
                        <Rate onChange={(val) => getRate(val)} defaultValue={Number(localStorage.getItem('rate'))} />
                    </Form.Item>

                    <Form.Item
                        name="review"
                    >
                        <Input.TextArea showCount maxLength={100} onChange={(e) => getText(e)} defaultValue={localStorage.getItem('message') ? String(localStorage.getItem('message')) : ''}/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )

}

// defaultValue={Number(localStorage.getItem('rate'))}
// defaultValue={localStorage.getItem('message') ? String(localStorage.getItem('message')) : ''}
