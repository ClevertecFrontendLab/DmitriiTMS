import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import { Image, Typography, Rate, Avatar } from 'antd';
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

export const FeedbackItem: React.FC<IReviews> = ({ fullName, message, rating, createdAt, imageSrc }) => {

    const countStarts = 5;
    const resCreatedDate = createdAt.slice(0, 10).split('-').reverse().join('.');

    return (
        <div className={styles.reviewsitem}>
            <div className={styles.reviewsItemPersona}>
                {
                    imageSrc ? <Image
                        preview={false}
                        width={42}
                        height={42}
                        src={imageSrc}
                    /> : <Avatar size={42} icon={<UserOutlined />} />
                }
                <Paragraph style={{ fontSize: '16px', marginBottom: '0', minWidth: '74px', maxWidth: '154px' }}>{fullName}</Paragraph>
            </div>
            <div className="reviews-item__descr">
                <div className={styles.reviewsItemDescrDate}>
                    <div>
                        <Rate count={rating} disabled defaultValue={rating} character={<StarFilled />} style={{ marginRight: '10px', fontSize: '16px' }} />
                        <Rate count={countStarts - rating} disabled defaultValue={countStarts - rating} character={<StarOutlined />} style={{ fontSize: '16px' }} />
                    </div>
                    <Text style={{ fontSize: '12px', color: '#BFBFBF', position: 'relative', top: '2px' }}>{resCreatedDate}</Text>
                </div>
                <Paragraph style={{ marginTop: '12px', fontSize: '14px', color: '#8C8C8C' }}>{message}</Paragraph>
            </div>
        </div>

    )
}
