import { createAsyncThunk } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import axios from 'axios';

interface UserRecoverPass {
    email: string,
    message: string,
    errors:  any,
    loading: boolean,
}

export const checkEmail = createAsyncThunk<UserRecoverPass, { email: string; }>(
    'recover/checkEMail',
    async ({ email }, { dispatch }) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 200));

            const response = await axios.post('https://marathon-api.clevertec.ru/auth/check-email', { email }, {
                withCredentials: true
            });
            localStorage.setItem('email', email);
            sessionStorage.setItem('stage', '1');
            localStorage.removeItem('recoverError');

            dispatch(push('/auth/confirm-email'))
            return response.data;
            
        } catch (errors: any) {
            localStorage.setItem('email', email);
            const status = errors.response.status;
            const {message} = errors.response.data;
            if(status === 404 && message === 'Email не найден') {
                dispatch(push('/result/error-check-email-no-exist'))
            } else {
                localStorage.setItem('recoverError', 'true');
                dispatch(push('/result/error-check-email'))
            }
        
            return errors.response.data;
        }
    }
);