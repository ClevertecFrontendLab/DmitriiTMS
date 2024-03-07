import { createSlice } from '@reduxjs/toolkit';

import { trainingsAsync } from '@redux/actions/trainings';

type Error = {
    statusCode: number;
    error: string;
    message: string;
};

type State = {
    isLoading: boolean;
    error: Error | null;
};

type Participant = 'string';

type Parameters = {
    repeat: boolean;
    period: 7;
    jointTraining: boolean;
    participants: Participant[];
};

type Exercise = {
    _id: 'string';
    name: 'string';
    replays: number;
    weight: number;
    approaches: number;
    isImplementation: boolean;
};

type Training = {
    _id: 'string';
    name: 'string';
    date: 'string';
    isImplementation: boolean;
    userId: 'string';
    parameters: Parameters;
    exercises: Exercise[];
};

type TrainingsState = State & {
    trainings: Training[];
};

const initialState: TrainingsState = {
    isLoading: false,
    error: null,
    trainings: [],
};

const trainingsSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(trainingsAsync.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(trainingsAsync.fulfilled, (state, payload) => {
            state.trainings = payload.payload;
            state.error = null;
            state.isLoading = false;
        });
        builder.addCase(trainingsAsync.rejected, (state, action) => {
            state.error = action.payload as Error;
            state.isLoading = false;
        });
    },
});

export default trainingsSlice.reducer;