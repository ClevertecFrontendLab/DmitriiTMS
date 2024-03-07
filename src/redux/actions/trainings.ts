import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { push } from 'redux-first-history';


type Error = {
    statusCode: number;
    error: string;
    message: string;
};

type Exercise = {
    _id: 'string';
    name: 'string';
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
};

type Participant = 'string';

type Parameters = {
    repeat: boolean;
    period: 7;
    jointTraining: boolean;
    participants: Participant[];
};

type Training = {
    _id: 'string';
    name: 'string';
    date: 'string';
    isImplementation: boolean;
    userId: 'string';
    parameters: Parameters;
    exercises: Exercise[];
};



export const trainingsAsync = createAsyncThunk<Training[], void, { rejectValue: Error }>(
    'trainings/trainingsAsync',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const accessToken = localStorage.getItem('token') || sessionStorage.getItem('token');
            await new Promise(resolve => setTimeout(resolve, 200));
            const trainings = await axios.get('https://marathon-api.clevertec.ru/training', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            dispatch(push('/calendar'))
            console.log(trainings);
    
            return trainings.data;
        } catch (error: unknown) {
            dispatch(push('/calendar'))
            const trainingsError = error as Error;
            console.log(trainingsError);
            return rejectWithValue(trainingsError);
        } 
        
    },
);
