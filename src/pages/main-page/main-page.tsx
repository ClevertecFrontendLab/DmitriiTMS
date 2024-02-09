import { MainCartList } from '@components/MainCartList/MainCartList';

import { List, Typography } from 'antd';
const { Paragraph } = Typography;

import styles from './main-page.module.css';

export const MainPage: React.FC = () => {
    const data = [
        '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
        '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
        ' — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
        '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров',
    ];
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
            <MainCartList />
        </div>
    )
};
