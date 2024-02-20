import { createSlice} from "@reduxjs/toolkit";

import { checkEMail } from "@redux/actions/checkemail";
import { codeVerification } from "@redux/actions/codeVerification";
import { changePassword } from "../actions/changePassword";


interface errorType {
    statusCode: number,
    error: string,
    message: string,
}

interface UserRecoverPass {
    email: string,
    message: string,
    errors:  errorType,
    loading: boolean,
}

const initialState: UserRecoverPass = {
    email: '',
    errors: {
        statusCode: 0,
        error: '',
        message: '',
    },
    message: '',
    loading: false,
}

const recoverSlice = createSlice({
    name: 'recover',
    initialState: initialState,
    reducers: {
        clearRecoveryErrors: (state) => {
            state.errors = {
                statusCode: 0,
                error: "",
                message: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(checkEMail.pending, (state) => {
            state.loading = true
        })
        .addCase(codeVerification.pending, (state) => {
            state.loading = true
        })
        .addCase(changePassword.pending, (state) => {
            state.loading = true
        })
        .addCase(checkEMail.fulfilled, (state, action) => {

            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
            };
            state.email = action.payload.email;
            state.message = action.payload.message;
            state.loading = false;
            sessionStorage.setItem('email', action.payload.email);
            sessionStorage.setItem('stage', '1');
        })
        .addCase(changePassword.fulfilled, (state, action) => {
            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
            };
            state.message = action.payload.message;
            state.loading = false
        })
        .addCase(codeVerification.fulfilled, (state, action) => {
            state.errors = {
                statusCode: 200,
                error: '',
                message: '',
            };
            state.email = action.payload.email;
            state.loading = false
            sessionStorage.setItem('stage', '2');
        })
        .addCase(checkEMail.rejected, (state, action) => {
            state.errors = action.payload as errorType;

            state.loading = false
            state.message = '';
        })
        .addCase(codeVerification.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false
            state.message = '';
        })
        .addCase(changePassword.rejected, (state, action) => {
            state.errors = action.payload as errorType;
            state.loading = false
            state.message = '';
        })
    }
})

export const { clearRecoveryErrors, } = recoverSlice.actions;

export default recoverSlice.reducer;