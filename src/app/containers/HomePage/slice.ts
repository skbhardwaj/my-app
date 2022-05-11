import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './types';


const initialState: IHomePageState = {
  keyword: '',
  type: 'OPEN',
  startCursor: '',
  endCursor: ''
};

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    SET_TYPE: (state, action) => {
      return {
        ...state,
        type: action.payload
      }
    },
    SET_KEYWORD: (state, action) => {
      return {
        ...state,
        keyword: action.payload
      }
    },
    SET_START_CURSOR: (state, action) => {
      return {
        ...state,
        startCursor: action.payload
      }
    },
    SET_END_CURSOR: (state, action) => {
      return {
        ...state,
        endCursor: action.payload
      }
    }
  },
});

export const { SET_TYPE, SET_KEYWORD, SET_START_CURSOR, SET_END_CURSOR } = HomePageSlice.actions;
export default HomePageSlice.reducer;
