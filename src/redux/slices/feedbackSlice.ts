import { createSlice } from '@reduxjs/toolkit';

import { feedbacksAsync } from '@redux/actions/feedback';


///////////////////////////////////////
type Error = {
    statusCode: number;
    error: string;
    message: string;
};

type State = {
    isLoading: boolean;
    error: Error | unknown;
};

type Feedback = {
    id: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string | null;
    rating: number;
    createdAt: string;
};
//////////////////////////////////////

type FeedbacksState = State & {
    feedbacks: Feedback[];
};

const initialState: FeedbacksState = {
    isLoading: false,
    error: null,
    feedbacks: [],
};

const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {  },
    extraReducers: (builder) => {
        builder.addCase(feedbacksAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(feedbacksAsync.fulfilled, (state, payload) => {
            state.isLoading = false;
            state.feedbacks = payload.payload;
            state.error = null;

        });
        builder.addCase(feedbacksAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as Error;
        });
    },
});

export default feedbacksSlice.reducer;
