/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';

import axios from 'axios';
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

export const registerUser = createAsyncThunk<UserState, { email: string; password: string }>(
    'user/register',
    async ({ email, password }, { dispatch  }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post('https://marathon-api.clevertec.ru/auth/registration', { email, password });
            localStorage.removeItem('regError');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('password');

            dispatch(push('/result/success'));
            return response.data;

        } catch (error: any) {
            const statusCode = error.response.status

            if (statusCode === 409) {
                localStorage.removeItem('regError');
                dispatch(push('/result/error-user-exist'));
            } else {
                localStorage.setItem('regError', 'true');
                dispatch(push('/result/error'));

            }
            return error.response.data;
        }
    }
);
