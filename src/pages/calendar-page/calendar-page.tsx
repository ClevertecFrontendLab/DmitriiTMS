import React, { useEffect, useState } from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar, Button, Modal, Popover, Select } from 'antd';
import type { Moment } from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';
import { trainingListAsync } from '@redux/actions/trainingListAsync';
import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Navigate } from 'react-router-dom';
import { trainingsAsync } from '@redux/actions/trainings';

import ruRU from 'antd/lib/calendar/locale/ru_RU';

import styles from './calendar-page.module.css'


const pickerLocale = {
    lang: {
        ...ruRU.lang,
        shortWeekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        shortMonths: [
            'Янв',
            'Фев',
            'Март',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сен',
            'Окт',
            'Ноя',
            'Дек',
        ],
    },
    timePickerLocale: {
        ...ruRU.timePickerLocale,
    },
};


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

// const getMonthData = (value: Moment) => {
//     if (value.month() === 8) {
//         return 1394;
//     }
// };
type IUser = {
    value: string;
    label: string;
}


export const CalendarPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [open, setOpen] = useState(false);

    const [objTrening, setObjTrening] = useState<IUser[]>([]);



    const isLoadingTrainings = useSelector((state: RootState) => state.trainings.isLoading);
    const isErrorTrainings = useSelector((state: RootState) => state.trainings.error);

    const isErrorTrainingsList = useSelector((state: RootState) => state.trainingsList.error);
    const isLoadingTrainingsList = useSelector((state: RootState) => state.trainingsList.isLoading);

    const typeTrening = useSelector((state: RootState) => state.trainingsList.trainingList);
    // const defaultTrening = String(objTrening[0].label);

    // console.log(typeTrening);


    // const monthCellRender = (value: Moment) => {
    //     const num = getMonthData(value);
    //     return num ? (
    //         <div className={styles.notesMonth}>
    //             <section>{num}</section>
    //             <span>Backlog number</span>
    //         </div>
    //     ) : null;
    // };

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const text = (
        <Select
            defaultValue='Ноги'
            style={{ width: '100%', position: 'absolute', top: '20px', left: '-170px', zIndex: '2'}}
            onChange={handleChange}
            options={objTrening}
        />
    );

    const content = (
        <div style={{ width: '100%', position: 'absolute', top: '60px', left: '-160px', background: '#fff', padding: '10px'}}>
            <p>Conten11111111t</p>
            <p>Content</p>
        </div>
    );

    const clickOnDate = () => {
        console.log('121212');

    };

    const clickOnButton = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        alert("Clicked on button!");
    };


    const dateCellRender = (value: Moment) => {

        const listData = getListData(value);

        return (
            <>
                <div>
                    <Popover placement="top" title={text} content={content} trigger="click" style={{background: 'transparent', boxShadow: 'none'}}>
                        <Button style={{
                            background: 'transparent',
                            position: "absolute",
                            zIndex: '3',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            color: 'transparent'
                        }}>button</Button>
                    </Popover>
                </div>

                <ul className={styles.events}>
                    {listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type as BadgeProps['status']} text={item.content} />
                        </li>
                    ))}
                </ul>
            </>
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


    useEffect(() => {
        if (!isLoadingTrainings) {
            dispatch(trainingListAsync())
            // dispatch(trainingsAsync())
        }
    }, [isErrorTrainings])

    useEffect(() => {
        if (isErrorTrainingsList) {
            showModal()
        }
    }, [isErrorTrainingsList])


    useEffect(() => {
        if (typeTrening) {
            const new_object = typeTrening.map((item) => {
                return { 'value': item.key, 'label': item.name };
            });
            setObjTrening(new_object);
        }
    }, [typeTrening])


    return <>
        {isErrorTrainings ? <Navigate to='/auth' replace /> : null}
        {(isLoadingTrainings || isLoadingTrainingsList) && <Loader />}
        <Modal
            style={{ maxWidth: '384px' }}
            open={open}
            title={
                <div style={{ display: 'flex', gap: '10px', alignItems: "flex-start" }}>
                    <CloseCircleOutlined className={styles.closeImg} />
                    <span data-test-id='modal-error-user-training-title'>При открытии данных<br></br> произошла ошибка</span>
                </div>
            }
            closeIcon={<CloseOutlined data-test-id='modal-error-user-training-button-close' />}
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
                // monthCellRender={monthCellRender}
                locale={pickerLocale}
                // onSelect={(date) => {
                //     console.log('Selected', date);
                // }}
                // onChange={(date) => {
                //     console.log(date.day());
                // }}
                onSelect={clickOnDate}
            // dateCellRender={() => (
            //     <span>
            //         <Button onClick={clickOnButton}>Click Me!</Button>
            //     </span>
            // )}
            />
        </div>
    </>


};
