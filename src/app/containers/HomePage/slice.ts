import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './types';


const initialState: IHomePageState = {
  keyword: '',
  type: 'OPEN',
  query: '',
  issues: [],
  error: undefined,
  loading: false
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
    SET_ISSUES: (state, action) => {
      return {
        ...state,
        issues: action.payload
      }
    },
    SET_ERROR: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
    SET_LOADING: (state, action) => {
      return {
        ...state,
        loading: action.payload
      }
    }
  },
});

export const { SET_TYPE, SET_KEYWORD, SET_ISSUES, SET_ERROR, SET_LOADING } = HomePageSlice.actions;
export default HomePageSlice.reducer;
