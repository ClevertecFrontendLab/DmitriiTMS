import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import axios from 'axios';

interface CodeVerification {
    email: string,
    code: string,
    errors: any,
}

export const codeVerification = createAsyncThunk<CodeVerification, { email: string; code: string }>(
    'recover/codeVerification',
    async ({ email, code }, {dispatch, rejectWithValue}) => {
        try {
         
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post('https://marathon-api.clevertec.ru/auth/confirm-email', { email, code }, {
                withCredentials: true
            });
            
            dispatch(push('/auth/change-password'));
            sessionStorage.setItem('stage', '2');

            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);