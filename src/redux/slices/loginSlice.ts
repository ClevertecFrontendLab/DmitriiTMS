import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@redux/actions/login';
import { registerUser } from '@redux/actions/register';


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

const initialState: UserState = {
    userToken: {
        accessToken: '',
    },
    errors: {
        statusCode: 0,
        error: '',
        message: '',
    },
    loading: false,
    checked: false,
};


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {

                state.errors = {
                    statusCode: 200,
                    error: '',
                    message: '',
                }
                state.loading = false;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.errors = {
                    statusCode: 200,
                    error: '',
                    message: '',
                };
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state) => {

                state.loading = false;
            })
            .addCase(loginUser.rejected, (state) => {
                localStorage.removeItem('token');
                state.loading = false;
            });
    },
});

export default userSlice.reducer;
