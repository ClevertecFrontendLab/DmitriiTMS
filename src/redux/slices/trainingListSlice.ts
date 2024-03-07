import { createSlice } from '@reduxjs/toolkit';

import { trainingListAsync } from '@redux/actions/trainingListAsync';


type Error = {
    statusCode: number;
    error: string;
    message: string;
};
type TrainingList = {
    name: 'string';
    key: 'string';
};

type TrainingListState = State & {
    trainingList: TrainingList[];
};

type State = {
    isLoading: boolean;
    error: Error | null;
};


const initialState: TrainingListState = {
    isLoading: false,
    error: null,
    trainingList: [],
};

const trainingListSlice = createSlice({
    name: 'trainingList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(trainingListAsync.pending, (state) => {
            state.error = null;
        });
        builder.addCase(trainingListAsync.fulfilled, (state, action) => {
            state.trainingList = action.payload;
            state.error = null;
        });
        builder.addCase(trainingListAsync.rejected, (state, action) => {
            state.error = action.payload as Error;
        });
    },
});

export default trainingListSlice.reducer;