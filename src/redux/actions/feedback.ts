import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { push } from 'redux-first-history';


type Feedback = {
    id: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
};

type Error = {
    statusCode: number;
    error: string;
    message: string;
};


export const feedbacksAsync = createAsyncThunk<Feedback[], void, { rejectValue: Error }>(
    'feedbacks',
    async (_, { dispatch}) => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.get('https://marathon-api.clevertec.ru/feedback1', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;

        } catch (error: any) {
            if (error.response.data.statusCode === 403) {
                localStorage.clear(); 
                sessionStorage.clear();
                dispatch(push('/auth'));
                return error.response.status
            } 
            
            if(error.response.data.statusCode !== 403) {
                console.log(error.response.data.statusCode);
                
                dispatch(push('/feedbacks'));
                return error.response.status
            }
        }
    },
);
