import React, { useEffect, useState } from 'react';


import { FeedbacksList } from '@components/FeedbacksList/FeedbacksList';
import { ButtonModal } from '@components/ButtonModal/ButtonModal';

import { Typography, Button } from 'antd';
const { Paragraph, Text } = Typography;

import styles from './feedbacks-page.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { feedbacksAsync } from '@redux/actions/feedback';
import { Loader } from '@components/Loader/Loader';


export const FeedbacksPage: React.FC = () => {

    const [allReviews, setAllReviews] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const arrFeedbacks = useSelector((state: RootState) => state.feedbacks.feedbacks);
    const isErrorFeedbacks = useSelector((state: RootState) => state.feedbacks.error);
    const isLoadingFeedbacks = useSelector((state: RootState) => state.feedbacks.isLoading);    

    const toggleReviews = () => {
        setAllReviews(!allReviews);
    }

    useEffect(() => {
        if(!arrFeedbacks.length) {
            if (!isErrorFeedbacks) {
                dispatch(feedbacksAsync())
            }
        }
    },[])

    return (
        <>
        {isLoadingFeedbacks && <Loader/>}
        <div className={arrFeedbacks && arrFeedbacks.length ? `${styles.wrapperFeedbacks}` : `${styles.wrapperFeedbacks} ${styles.modal}`}>
            <div className={styles.reviews}>

                {arrFeedbacks && arrFeedbacks.length ? <div style={{height: '650px', overflowY: 'auto'}}>
                        <FeedbacksList
                                allReviews={allReviews}
                            />
                    </div> : null}
                <div>

                    {
                        !arrFeedbacks.length && <div className={styles.noRewiews}>
                            <Paragraph style={{ fontWeight: '500', fontSize: '24px', color: '#061178' }}>Оставьте свой отзыв первым</Paragraph>
                            <div className={styles.noRewiewsText}>
                                <Text type="secondary">
                                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                                    Поделитесь своим мнением и опытом с другими пользователями, и помогите им сделать правильный выбор.
                                </Text>
                            </div>
                        </div>
                    }

                    <div className={arrFeedbacks && arrFeedbacks.length ? `${styles.btnModal} ${styles.btnModalLeft}` :  `${styles.btnModal}`}>
                        <ButtonModal />
                        {arrFeedbacks && arrFeedbacks.length && <Button type="text" style={{color: '#061178'}} onClick={toggleReviews}>{!allReviews ? 'Развернуть все отзывы' : 'Свернуть все отзывы'}</Button>}
                    </div>

                </div>

            </div>
        </div>
        </>
        
    )
};
