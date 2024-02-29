import { FeedbackItem } from '@components/FeedbackItem/FeedbackItem';
import React from 'react';


export const FeedbacksList: React.FC = () => {

    const arr: any = [
        {
            id: '1',
            fullName: 'Иван Петров',
            imageSrc: 'image',
            message: 
            'Lorem, ipsum dolor sit amet consectetur dolor sit amet consectetur adipisicing elit. Excepturi fuga a voluptate, quis adipisicing elit. Excepturi fuga a voluptate, quisquam molestia rem eum similique totam repellat, sunt magn',
            rating: 4,
            createdAt: '2024-02-29'
        },
        {
            id: '2',
            fullName: 'Jon Travolta',
            imageSrc: 'image2',
            message: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga a voluptate, quisquam molestia rem eum similique totam repellat, sunt magn',
            rating: 2,
            createdAt: '2024-05-21'
        },
        {
            id: '3',
            fullName: 'Jon Travolta',
            imageSrc: 'image2',
            message: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga a voluptate, quisquam molestia rem eum similique totam repellat, sunt magn',
            rating: 2,
            createdAt: '2024-05-21'
        },
        {
            id: '4',
            fullName: 'Jon Travolta',
            imageSrc: 'image2',
            message: 
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga a voluptate, quisquam molestia rem eum similique totam repellat, sunt magn',
            rating: 2,
            createdAt: '2024-05-21'
        },
    ]
    return (
       arr.map((item: any) => {
        return <FeedbackItem {...item} key={item.id} />
       })
    )
}