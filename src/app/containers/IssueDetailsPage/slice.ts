import { createSlice } from '@reduxjs/toolkit';
import { IIssueDetailsPageProps } from './types';


const initialState: IIssueDetailsPageProps = {
  // pageData: undefined,
  // error: undefined,
  // loading: false
};

const IssueDetailsPageSlice = createSlice({
  name: 'issueDetailsPage',
  initialState,
  reducers: {
    SET_DETAILS_PAGE: (state, action) => {
      return {
        ...state,
        pageData: action.payload
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

export const { SET_DETAILS_PAGE, SET_ERROR, SET_LOADING } = IssueDetailsPageSlice.actions;
export default IssueDetailsPageSlice.reducer;
