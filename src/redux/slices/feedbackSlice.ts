import { createSlice } from '@reduxjs/toolkit';

import { feedbacksAsync } from '@redux/actions/feedback';
import { feedbackPost } from '@redux/actions/feedbackPost';


///////////////////////////////////////
type Error = {
    statusCode: number;
    error: string;
    errorPost: string;
    message: string;
};

type State = {
    isLoading: boolean;
    error: Error | unknown;
    errorPost: Error | unknown;
    isPostSuccses: boolean
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
    errorPost: null,
    feedbacks: [],
    isPostSuccses: false
};

const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(feedbacksAsync.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(feedbackPost.pending, (state) => {
            state.isLoading = true;
            state.errorPost = null;
            state.isPostSuccses = false;
        });

        builder.addCase(feedbacksAsync.fulfilled, (state, payload) => {
            state.isLoading = false;
            state.feedbacks = payload.payload;
            state.error = null;
        });
        builder.addCase(feedbackPost.fulfilled, (state) => {
            state.isLoading = false;
            state.errorPost = null;
            state.isPostSuccses = true;
        });

        builder.addCase(feedbacksAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as Error;
        });
        builder.addCase(feedbackPost.rejected, (state, action) => {
            state.isLoading = false;
            state.errorPost = action.payload as Error;
            state.isPostSuccses = false;
        })
    },
});

export default feedbacksSlice.reducer;
