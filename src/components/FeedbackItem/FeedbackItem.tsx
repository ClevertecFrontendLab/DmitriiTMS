import React from 'react';

import avatar from '../../assets/feedbacks/avatar.png';

import { Image, Typography, Rate } from 'antd';
const { Paragraph, Text } = Typography;
import { StarOutlined, StarFilled } from '@ant-design/icons';

import styles from './FeddbackItem.module.css'

interface IReviews {
    id: string,
    fullName: string,
    imageSrc?: string,
    message: string,
    rating: number,
    createdAt: string
}

export const FeedbackItem: React.FC<IReviews> = ({fullName,message,rating,createdAt }) => {

    const countStarts = 5;
    return (
        <div className={styles.reviewsitem}>
            <div className={styles.reviewsItemPersona}>
                <Image
                    preview={false}
                    width={42}
                    height={42}
                    src={avatar}
                />
                <Paragraph style={{ fontSize: '16px', marginBottom: '0' }}>{fullName}</Paragraph>
            </div>
            <div className="reviews-item__descr">
                <div className={styles.reviewsItemDescrDate}>
                    <div>
                        <Rate count={rating} disabled defaultValue={rating} character={<StarFilled />} style={{ marginRight: '10px', fontSize: '16px' }} />
                        <Rate count={countStarts - rating} disabled defaultValue={countStarts - rating} character={<StarOutlined />} style={{ fontSize: '16px' }} />
                    </div>
                    <Text style={{ fontSize: '12px', color: '#BFBFBF', position: 'relative', top: '2px' }}>{createdAt}</Text>
                </div>
                <Paragraph style={{ marginTop: '12px', fontSize: '14px', color: '#8C8C8C' }}>{message}</Paragraph>
            </div>
        </div>

    )
}  