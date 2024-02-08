import React from 'react';
import { List, Typography } from 'antd';
const { Paragraph } = Typography;

import heart from '../../assets/icons/heart.svg';
import calendar from '../../assets/icons/calendar.svg';
import profile from '../../assets/icons/profile.svg';

import styles from './main-page.module.css';



const data = [
    '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
    '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    ' — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
    '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров',
];


export const MainPage: React.FC = () => {

    return (
        <div className={styles.mainWrapper}>
            <List
                className={styles.mainList}
                header={<div>С CleverFit ты сможешь:</div>}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Paragraph className={styles.mainText}>CleverFit — это
                не просто приложение, а твой личный помощник в мире фитнеса.
                Не откладывай на завтра — начни
                тренироваться уже сегодня!
            </Paragraph>

            <div className={styles.list}>
                <div className={styles.list__item}>
                    <Paragraph className={styles.list__item_title}>Расписать тренировки</Paragraph>
                    <Paragraph className={styles.content}>
                        <img className={styles.content__img} src={heart} alt="heart" />
                        <span className={styles.content__span}>Тренировки</span>
                    </Paragraph>
                </div>
                <div className={styles.list__item}>
                    <Paragraph className={styles.list__item_title}>Назначить календарь</Paragraph>
                    <Paragraph className={styles.content}>
                        <img className={styles.content__img} src={calendar} alt="calendar" />
                        <span className={styles.content__span}>Календарь</span>
                    </Paragraph>
                </div>
                <div className={styles.list__item}>
                    <Paragraph className={styles.list__item_title}>Расписать тренировки</Paragraph>
                    <Paragraph className={styles.content}>
                        <img className={styles.content__img} src={profile} alt="profile" />
                        <span className={styles.content__span}>Профиль</span>
                    </Paragraph>
                </div>
            </div>

        </div>
    )
};
