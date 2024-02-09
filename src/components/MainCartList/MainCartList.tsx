import { MainCartItem } from '@components/MainCartItem/MainCartItem';

import heart from '../../assets/icons/heart.svg';
import calendar from '../../assets/icons/calendar.svg';
import profile from '../../assets/icons/profile.svg';

import styles from './MainCartList.module.css';

export const MainCartList: React.FC = () => {
    const arrList = [
        {
            id: 1,
            title: 'Расписать тренировки',
            span: 'Тренировки',
            icon: heart,

        },
        {
            id: 2,
            title: 'Назначить календарь',
            span: 'Календарь',
            icon: calendar,

        },
        {
            id: 3,
            title: 'Заполнить профиль',
            span: 'Профиль',
            icon: profile,

        },
    ]
    return (
        <div className={styles.list}>
            {
                arrList.map(item => {
                    return (
                        <MainCartItem {...item} key={item.id} />
                    )
                })
            }
        </div>
    )
}