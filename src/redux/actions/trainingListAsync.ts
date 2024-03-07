import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


type Error = {
    statusCode: number;
    error: string;
    message: string;
};
type TrainingList = {
    name: 'string';
    key: 'string';
};


export const trainingListAsync = createAsyncThunk<TrainingList[] | unknown, void, { rejectValue: Error }>(
    'trainingList/trainingListAsync',
    async (_, {rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
            await new Promise(resolve => setTimeout(resolve, 200));
            const trainingsList = await axios.get('https://marathon-api.clevertec.ru/catalogs/training-list', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(trainingsList.data);
            return trainingsList.data;

        } catch (error: unknown) {
            const trainingListError = error as Error;
            console.log(trainingListError);
            return rejectWithValue(trainingListError);
        }
    },
);
