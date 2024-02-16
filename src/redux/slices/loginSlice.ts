import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { push } from "redux-first-history";

interface LoginState {
    jwt: string | null,
}

const initialState: LoginState = {
    jwt: null
}

// export const postLogin = createAsyncThunk(
//     'login/postLogin',
//     async (data) => {
//         try {
//           const response = await axios.put("https://marathon-api.clevertec.ru/auth/login", data)
//           return response.data
//         } catch (err) {
//           // custom error
//         }
//       }
// ) 

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addJwt: (state) => {
            state.jwt = 'jwt'
        },
        logout: (state) => {
            state.jwt = null
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(postLogin.fulfilled, (state, { payload }) => {
          
    //     })

    //   }
})

export default loginSlice.reducer;
export const loginAction = loginSlice.actions;