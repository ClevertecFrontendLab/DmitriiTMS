/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { push } from 'redux-first-history';

interface UserState {
    userToken: {
        accessToken: string
    },
    errors: {
        statusCode: number,
        error: string,
        message: string,
    },
    loading: boolean,
    checked: boolean,
}

export const loginUser = createAsyncThunk<UserState, { email: string; password: string, checked: boolean }>(
    'user/login',
    async ({ email, password, checked }, { dispatch }) => {
        try {
            // await new Promise(resolve => setTimeout(resolve, 200));
            const response = await axios.post('https://marathon-api.clevertec.ru/auth/login', { email, password });

            if(checked) {
                localStorage.setItem('token', `${response.data.accessToken}`)
            } else {
                sessionStorage.setItem('token', `${response.data.accessToken}`);
            }

            dispatch(push('/main'));
            return response.data;

        } catch (error: any) {
            dispatch(push('/result/error-login'));
            return error.response.data;
        }
    }
);
