import React, { useEffect, useState } from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar, Button, Modal } from 'antd';
import type { Moment } from 'moment';
import styles from './calendar-page.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';
import { trainingListAsync } from '@redux/actions/trainingListAsync';
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Navigate } from 'react-router-dom';


const getListData = (value: Moment) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Moment) => {
    if (value.month() === 8) {
        return 1394;
    }
};

export const CalendarPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [open, setOpen] = useState(false);

    const isLoadingTrainings = useSelector((state: RootState) => state.trainings.isLoading);
    const isErrorTrainings = useSelector((state: RootState) => state.trainings.error);

    const isErrorTrainingsList = useSelector((state: RootState) => state.trainingsList.error);
    const isLoadingTrainingsList = useSelector((state: RootState) => state.trainingsList.isLoading);

    const monthCellRender = (value: Moment) => {
        const num = getMonthData(value);
        return num ? (
            <div className={styles.notesMonth}>
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Moment) => {
        const listData = getListData(value);
        return (
            <ul className={styles.events}>
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };



    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        dispatch(trainingListAsync())
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    // useEffect(() => {
    //     if (!isLoadingTrainings) {
    //         dispatch(trainingListAsync())
    //         dispatch(trainingsAsync())
    //     }
    // }, [isErrorTrainings])

    useEffect(() => {
        if (isErrorTrainingsList) {
            showModal()
        }
    }, [isErrorTrainingsList])


    return <>
        {isErrorTrainings ? <Navigate to='/auth' replace /> : null}
        {(isLoadingTrainings || isLoadingTrainingsList)  && <Loader />}
        <Modal
            style={{ maxWidth: '384px' }}
            open={open}
            title={
                <div style={{ display: 'flex', gap: '10px', alignItems: "flex-start" }}>
                    <CloseCircleOutlined className={styles.closeImg} />
                    <span data-test-id='modal-error-user-training-title'>При открытии данных<br></br> произошла ошибка</span>
                </div>
            }
            closeIcon={<CloseOutlined data-test-id='modal-error-user-training-button-close'/>}
            onCancel={handleCancel}
            footer={[
                <Button data-test-id='modal-error-user-training-button' type="primary" onClick={handleOk}>
                    Обновить
                </Button>
            ]}
            centered
        >
            <p data-test-id='modal-error-user-training-subtitle'>Попробуйте ещё раз</p>
        </Modal>


        <div className={styles.wrapperCalendar}>
            <Calendar
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
            // onSelect={(date) => {
            //     console.log('Selected', date);
            // }}
            // onChange={(date) => {
            //     console.log(date.day());
            // }}
            />
        </div>
    </>


};
