import { FeedbackItem } from '@components/FeedbackItem/FeedbackItem';
import { feedbacksAsync } from '@redux/actions/feedback';
import { AppDispatch, RootState } from '@redux/configure-store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


type Feedback = {
    id: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
};

interface IReviews {
    allReviews: boolean,
}


export const FeedbacksList: React.FC<IReviews> = ({ allReviews }) => {

    const [reviewsFeedbacks, setReviewsFeedbacks] = useState<Feedback[]>([])
    const dispatch = useDispatch<AppDispatch>();
    const arrFeedbacks = useSelector((state: RootState) => state.feedbacks.feedbacks);

    const sortReviews = (feedbacks: Feedback[]) => {
        const localReviews = JSON.parse(JSON.stringify(feedbacks)).sort((a: any, b: any) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate())
        setReviewsFeedbacks(localReviews)
    }
    
    useEffect(() => {
        if (arrFeedbacks) {
            sortReviews(arrFeedbacks.slice(-4))
        }
    }, []);

    useEffect(() => {
        if (!allReviews) {
            sortReviews(arrFeedbacks.slice(-4))
        } else {
            dispatch(feedbacksAsync())
            sortReviews(arrFeedbacks);
        }
    }, [allReviews])


    return (
        reviewsFeedbacks && reviewsFeedbacks.map((item: any) => {
            return <FeedbackItem {...item} key={item.id} />
        })
    )
}