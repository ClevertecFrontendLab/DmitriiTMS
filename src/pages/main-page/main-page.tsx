import { MainCartList } from '@components/MainCartList/MainCartList';

import { List, Typography, Button } from 'antd';

const { Paragraph, Link, Text } = Typography;
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import styles from './main-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { push } from 'redux-first-history';
import { Loader } from '@components/Loader/Loader';
import { feedbacksAsync } from '@redux/actions/feedback';
import { ModalTrainingsError } from '@components/ModalTrainingsError/ModalTrainingsError';
import { useEffect } from 'react';

export const MainPage: React.FC = () => {

    const data = [
        '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
        '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
        ' — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
        '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров',
    ];

    const dispatch = useDispatch<AppDispatch>();
    const isLoadingFeedbacks = useSelector((state: RootState) => state.feedbacks.isLoading);
    const isErrorFeedbacks = useSelector((state: RootState) => state.feedbacks.error);

    const isLoadTrainings = useSelector((state: RootState) => state.trainings.isLoading);
    const isErrorTrainings = useSelector((state: RootState) => state.trainings.error);

    const getReviews = async () => {
        if (!isErrorFeedbacks && (localStorage.getItem('token') || sessionStorage.getItem('token'))) {
            await dispatch(feedbacksAsync());
        }
        if (!isLoadingFeedbacks) {
            dispatch(push('/feedbacks'))
        }
    }

    useEffect(() => {
        if(isLoadTrainings && isErrorTrainings) {
            dispatch(push('/main'))
        }
    }, [dispatch, isErrorTrainings, isLoadTrainings])


    return (
        <>
        {isErrorTrainings && <ModalTrainingsError/>}
            {isLoadTrainings && <Loader />}
            {isLoadingFeedbacks && <Loader />}

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

                    <button className={styles.mainLinkReviews} onClick={getReviews} data-test-id='see-reviews'>
                        Смотреть отзывы
                    </button>

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
        </>

    )
};
