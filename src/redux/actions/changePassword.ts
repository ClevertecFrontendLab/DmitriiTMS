import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import axios from 'axios';

interface ChangePasswordType{
    email: string,
    confirmPassword: string,
    message: string,
    errors:  any,
}

export const changePassword = createAsyncThunk<ChangePasswordType, { password: string; confirmPassword: string; }>(
    'recover/changePassword',
    async ({ password, confirmPassword }, { rejectWithValue, dispatch }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post('https://marathon-api.clevertec.ru/auth/change-password', { password, confirmPassword }, {
                withCredentials: true
            });
            localStorage.removeItem('recoverError');
            dispatch(push('/result/success-change-password'));
            return response.data;
            
        } catch (error: any) {
            localStorage.setItem('recoverError', 'true');
            dispatch(push('/result/error-change-password'));
            await new Promise(resolve => setTimeout(resolve, 200));

            return rejectWithValue(error.response.data);
        }
    }
);