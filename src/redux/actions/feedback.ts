/* eslint-disable @typescript-eslint/no-explicit-any */
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
    'feedbacks/feedbacksAsync',
    async (_, { dispatch, rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.get('https://marathon-api.clevertec.ru/feedback', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            return response.data;
        } catch (error: any) {

            if (error.response.status == 403 ) {
                localStorage.clear();
                sessionStorage.clear();

                dispatch(push('/auth'));
                return rejectWithValue(error.response.status);
            }

            if(error.response.status !== 403) {
                dispatch(push('/feedbacks'));
                return rejectWithValue(error.response.status);
            }

            return rejectWithValue(error.response.status);

        }
    },
);
