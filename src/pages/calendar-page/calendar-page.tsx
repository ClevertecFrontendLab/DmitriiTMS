import React, { useEffect, useState } from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar, Button, Modal } from 'antd';
import type { Moment } from 'moment';
import styles from './calendar-page.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';
import { trainingListAsync } from '@redux/actions/trainingListAsync';
import { ModalTrainingsError } from '@components/ModalTrainingsError/ModalTrainingsError';
import { trainingsAsync } from '@redux/actions/trainings';
import { CloseCircleOutlined } from '@ant-design/icons';


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
        {(isLoadingTrainings || isLoadingTrainingsList)  && <Loader />}
        {isErrorTrainings && <ModalTrainingsError />}

        <Modal
            style={{ maxWidth: '384PX' }}
            open={open}
            title={
                <div style={{ display: 'flex', gap: '10px', alignItems: "flex-start" }}>
                    <CloseCircleOutlined className={styles.closeImg} />
                    <span>При открытии данных<br></br> произошла ошибка</span>
                </div>
            }
            onCancel={handleCancel}
            footer={[
                <Button type="primary" onClick={handleOk}>
                    Обновить
                </Button>
            ]}
            centered
        >
            <p>Попробуйте ещё раз</p>
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
