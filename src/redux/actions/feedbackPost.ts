/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Feedback = {
    rating: number;
    message: string;
}

export const feedbackPost = createAsyncThunk<Feedback, { rating: number; message: string }>(
    'feedbacks/feedbackPost',
    async ({ rating, message }, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
            await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.post('https://marathon-api.clevertec.ru/feedback', { rating, message }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            return response.data

        } catch (error: any) {
            return rejectWithValue(error.response.data.statusCode);
        }
    }
);
