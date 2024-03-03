import React, { useEffect, useState } from 'react';

import { FeedbacksList } from '@components/FeedbacksList/FeedbacksList';
import { ButtonModal } from '@components/ButtonModal/ButtonModal';

import { Typography, Button, Result, Modal } from 'antd';
const { Paragraph, Text } = Typography;

import styles from './feedbacks-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@redux/configure-store';
import { feedbacksAsync } from '@redux/actions/feedback';
import { push } from 'redux-first-history';

export const FeedbacksPage: React.FC = () => {

    const [openModal2, setOpenModal2] = useState(false)



    const [allReviews, setAllReviews] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isSuccess, setSuccess] = useState(false);
    const [isErrorModal, setErrorModal] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const arrFeedbacks = useSelector((state: RootState) => state.feedbacks.feedbacks);
    // const arrs = true
    const isErrorFeedbacks = useSelector((state: RootState) => state.feedbacks.error);
    const isLoadingFeedbacks = useSelector((state: RootState) => state.feedbacks.isLoading);

    const isErrorFeedbacksPost = useSelector((state: RootState) => state.feedbacks.errorPost);
    const isPost = useSelector((state: RootState) => state.feedbacks.isPostSuccses);


    const getOpenModalError2 = () => {
        setOpenModal2(true)
    }
    const getCloselError2 = () => {
        setOpenModal2(false)
    }


    const toggleReviews = () => {
        setAllReviews(!allReviews);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        dispatch(push('/main'))
        // dispatch(feedbacksAsync());
    };

    const toggleisSuccess = () => {
        setSuccess(false);
    };

    const closeErrorModal = () => {
        setErrorModal(false)
    }

    const closeErrorModal2 = () => {
        setErrorModal(false)
        getOpenModalError2()
    }

    useEffect(() => {
        if (isErrorFeedbacks !== 403) {
            showModal();
        }
        if (isErrorFeedbacks === 403) {
            dispatch(push('/auth'));
        }
    }, [dispatch, isErrorFeedbacks]);

    useEffect(() => {
        if (isPost && !isErrorFeedbacksPost) {
            setSuccess(true);
        }
    }, [isPost, isErrorFeedbacksPost]);

    useEffect(() => {
        if (isErrorFeedbacksPost) {
            setErrorModal(true)
        }
    }, [isErrorFeedbacksPost])

    // console.log(isErrorFeedbacksPost);

    return (
        <>
            <div
                className={
                    !arrFeedbacks
                        ? `${styles.wrapperFeedbacks}`
                        : `${styles.wrapperFeedbacks} ${styles.modal}`
                }
            >
                <button onClick={() => dispatch(push('/main'))}>Назад</button>
                {isErrorModal ? (
                    <div className={styles.modalPostSuccess}>
                        <div className={styles.modalPostSuccessInner}>
                            <Result
                                status='error'
                                title='Данные не сохранились'
                                subTitle='Что-то пошло не так.Попробуйте ещё раз'
                                extra={[
                                    <Button type='primary' key='console' onClick={closeErrorModal2} data-test-id='write-review-not-saved-modal'>
                                        Написать отзыв
                                    </Button>,
                                    <Button key='buy' onClick={closeErrorModal}>Закрыть</Button>,
                                ]}
                            />
                        </div>
                    </div>
                ) : null}
                {isSuccess && (
                    <div className={styles.modalPostSuccess}>
                        <div className={styles.modalPostSuccessInner}>
                            <Result
                                status='success'
                                title='Отзыв успешно опубликован'
                                extra={
                                    <Button type='primary' key='console' onClick={toggleisSuccess}>
                                        Отлично
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                )}
                {
                    isErrorFeedbacks && isErrorFeedbacks !== 403 ? (
                        <Modal
                            closable={false}
                            footer={null}
                            maskStyle={{
                                backgroundColor: 'rgba(121,156,212, 0.5)',
                                backdropFilter: 'blur(3px)',
                            }}
                            open={isModalOpen}
                            onCancel={
                                isErrorFeedbacks && isErrorFeedbacks !== 403 ? handleCancel : () => ''
                            }
                        >
                            <Result
                                status='500'
                                title='Что-то пошло не так'
                                subTitle='Произошла ошибка, попробуйте ещё раз'
                                extra={[<Button type='primary' onClick={handleCancel}>
                                    Назад
                                </Button>]

                                }
                            />
                        </Modal>
                    ) : null}


                <div className={styles.reviews}>
                    {arrFeedbacks &&  (
                        <div style={{ height: '650px', overflowY: 'auto' }}>
                            <FeedbacksList allReviews={allReviews} />
                        </div>
                    )}
                    {!arrFeedbacks &&
                        <div className={styles.noRewiews}>
                            <Paragraph
                                style={{
                                    fontWeight: '500',
                                    fontSize: '24px',
                                    color: '#061178',
                                }}
                            >
                                Оставьте свой отзыв первым
                            </Paragraph>
                            <div className={styles.noRewiewsText}>
                                <Text type='secondary'>
                                    Вы можете быть первым, кто оставит отзыв об этом фитнесс
                                    приложении. Поделитесь своим мнением и опытом с другими
                                    пользователями, и помогите им сделать правильный выбор.
                                </Text>
                            </div>
                        </div>
                    }




                    {!isLoadingFeedbacks && !isErrorFeedbacks && (
                        <div>
                            <div
                                className={
                                    arrFeedbacks
                                        ? `${styles.btnModalCenter} ${styles.btnModal}`
                                        : `${styles.btnModalCenter}`
                                }
                            >
                                <ButtonModal openModal2={openModal2} getCloselError2={getCloselError2} />
                                <Button
                                    type='text'
                                    style={{ color: '#061178' }}
                                    onClick={toggleReviews}
                                    data-test-id='all-reviews-button'
                                >
                                    {!allReviews
                                        ? 'Развернуть все отзывы'
                                        : 'Свернуть все отзывы'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
};
