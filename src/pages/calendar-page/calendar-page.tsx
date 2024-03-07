import React from 'react';
import type { BadgeProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Moment } from 'moment';
import styles from './calendar-page.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '@redux/configure-store';
import { Loader } from '@components/Loader/Loader';



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

    const isLoadingTrainings = useSelector((state: RootState) => state.trainings.isLoading);

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



    return <>
        {isLoadingTrainings && <Loader />}
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
