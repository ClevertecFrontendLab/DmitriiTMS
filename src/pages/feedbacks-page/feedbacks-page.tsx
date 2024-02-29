import React from 'react';


import { FeedbacksList } from '@components/FeedbacksList/FeedbacksList';
import { ButtonModal } from '@components/ButtonModal/ButtonModal';

import { Typography, Button } from 'antd';
const { Paragraph, Text } = Typography;

import styles from './feedbacks-page.module.css'



export const FeedbacksPage: React.FC = () => {

    const arr = true;

    return (
        <div className={arr ? `${styles.wrapperFeedbacks}` : `${styles.wrapperFeedbacks} ${styles.modal}`}>
            <div className={styles.reviews}>

                {arr && <div style={{height: '650px', overflowY: 'auto'}}><FeedbacksList/></div>}
                <div>

                    {
                        !arr && <div className={styles.noRewiews}>
                            <Paragraph style={{ fontWeight: '500', fontSize: '24px', color: '#061178' }}>Оставьте свой отзыв первым</Paragraph>
                            <div className={styles.noRewiewsText}>
                                <Text type="secondary">
                                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                                    Поделитесь своим мнением и опытом с другими пользователями, и помогите им сделать правильный выбор.
                                </Text>
                            </div>
                        </div>
                    }

                    <div className={ arr ? `${styles.btnModal} ${styles.btnModalLeft}` :  `${styles.btnModal}`}>
                        <ButtonModal />
                        {arr && <Button type="text" style={{color: '#061178'}}>Свернуть все отзывы</Button>}
                    </div>
                    

                </div>



            </div>
        </div>
    )
};
