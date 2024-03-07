import { MainCartItem } from '@components/MainCartItem/MainCartItem';

import heart from '../../assets/icons/heart.svg';
import calendar from '../../assets/icons/calendar-main.svg';
import profile from '../../assets/icons/profile.svg';

import styles from './MainCartList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { trainingsAsync } from '@redux/actions/trainings';
import { trainingListAsync } from '@redux/actions/trainingListAsync';
import { push } from 'redux-first-history';

export const MainCartList: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const isErrorTrainings = useSelector((state: RootState) => state.trainings.error);

    const getCalendar = async () => {
        console.log('1212');

        await dispatch(trainingsAsync());
        if (!isErrorTrainings) {
            dispatch(push('/calendar'));
            await dispatch(trainingListAsync());
        }
    }

    const getCalendar1 = () => {
        console.log('1212');
    }
    const getCalendar2 = () => {
         console.log('1212');
    }

    const arrList = [
        {
            id: 1,
            title: 'Расписать тренировки',
            span: 'Тренировки',
            icon: heart,
            onclick: getCalendar1,
            dataTestId:'menu-button-trening'

        },
        {
            id: 2,
            title: 'Назначить календарь',
            span: 'Календарь',
            icon: calendar,
            onclick: getCalendar,
            dataTestId:'menu-button-calendar'

        },
        {
            id: 3,
            title: 'Заполнить профиль',
            span: 'Профиль',
            icon: profile,
            onclick: getCalendar2,
            dataTestId:'menu-button-prof'
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
