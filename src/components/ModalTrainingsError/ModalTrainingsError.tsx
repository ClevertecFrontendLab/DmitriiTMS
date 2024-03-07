import { AppDispatch, RootState } from '@redux/configure-store';
import { Button, Modal, Result } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

export const ModalTrainingsError: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const isErrorTrainings = useSelector((state: RootState) => state.trainings.error);
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const backMain = () => {
        dispatch(push('/main'));
        handleCancel()
    }

    useEffect(() => {
        if(isErrorTrainings) {
            showModal();
        }
    }, [isErrorTrainings])

    return (
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} closable={false}>
            <Result
                status="500"
                title="Что-то пошло не так"
                subTitle="Произошла ошибка, попробуйте ещё раз"
                extra={<Button onClick={backMain} type="primary">Назад</Button>}
            />
        </Modal>
    )
}