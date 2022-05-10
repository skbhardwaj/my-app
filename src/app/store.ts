import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import homePageReducer from './containers/HomePage/slice';
import detailsPageReducer from './containers/IssueDetailsPage/slice';


export const store = configureStore({
  middleware: [ReduxLogger],
  reducer: {
    homePage: homePageReducer,
    detailsPage: detailsPageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
