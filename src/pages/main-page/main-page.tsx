import { MainCartList } from '@components/MainCartList/MainCartList';

import { Link as LinkDom } from 'react-router-dom';

import { List, Typography, Button } from 'antd';
const { Paragraph, Link, Text } = Typography;
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

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
                header={<div>С CleverFit ты сможешь:</div>}
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Paragraph className={styles.mainText}>CleverFit — это
                не просто приложение, а твой личный помощник в мире фитнеса.
                Не откладывай на завтра — начни
                тренироваться уже сегодня!
            </Paragraph>

            <MainCartList />

            <div className={styles.cardBlockDowload}>

                <LinkDom to='/feedbacks' className={styles.mainLinkReviews}>Смотреть отзывы</LinkDom>

                <div className={styles.cartDownload}>
                    <div className={styles.cartDownloadTitleBlock}>
                        <Link href="#" className={styles.cartDownloadLink}>Скачать на телефон</Link>
                        <Text type="secondary" className={styles.cartDownloadText}>Доступно в PRO-тарифе</Text>
                    </div>

                    <div className={styles.cartDownloadContent}>
                        <Button className={styles.cartDownloadLinkText} type="link" href='#' icon={<AndroidFilled style={{ color: '#262626' }} />}>
                            Android OS
                        </Button>
                        <Button className={styles.cartDownloadLinkText} type="link" href='#' icon={<AppleFilled style={{ color: '#262626' }} />}>
                            Apple iOS
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )
};
