import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

import userReducer from './slices/userSlice';
import recoveryReducer from "./slices/recoverySlice";
import feedbackReducer from './slices/feedbackSlice';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory(), savePreviousLocations: 1 });

export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    user: userReducer,
    recover: recoveryReducer,
    feedbacks: feedbackReducer

  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
