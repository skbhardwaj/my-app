import { Dispatch } from '@reduxjs/toolkit';
import styled from 'styled-components';
import Heading from '../../components/Heading';
import IssuesList from '../../components/IssuesList';
import SearchBox from '../../components/SearchBox';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from '../../styles';
import { SET_KEYWORD, SET_TYPE } from './slice';
import { IHomePageProps } from './types';

const HomePageContainer = styled.div`
  ${styles.Page}
`;


const actionDispatch = (dispatch: Dispatch) => ({
  setKeyword: (data: any) => dispatch(SET_KEYWORD(data)),
  setType: (data: any) => dispatch(SET_TYPE(data)),
});


// const getData = async (searchKeyword: string, issueType: string) => {
//   const query = `${process.env.REACT_APP_GITHUB_REPO}${searchKeyword ? ` ${searchKeyword} in:title,body` : ""} is:${issueType} type:issue`;
//   console.log('getData--->>>', { searchKeyword, issueType, query });
//   // const { setData, setError, setLoading, setKeyword, setType } = actionDispatch(useAppDispatch());

//   // dispatch action !!

//   // const { loading, error, data } = useFetchIssuesQuery({ variables: { query } });
//   // console.log({ loading, error, data });
// }

const HomePage = (props: IHomePageProps) => {
  const { keyword, type } = useAppSelector((state) => state.homePage);
  const { setKeyword, setType } = actionDispatch(useAppDispatch());

  // const delayedQuery = useCallback(debounce((keyword, type) => getData(keyword, type), STANDARD_TIMEOUT), []);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    // delayedQuery(value, type);
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setType(value);
    // delayedQuery(keyword, value);
  }

  return (
    <HomePageContainer>
      <Heading text={'React github repo issues'} />
      <SearchBox keyword={keyword} handleKeywordChange={handleKeywordChange} type={type} handleTypeChange={handleTypeChange} />
      <IssuesList />
    </HomePageContainer>
  );
};

export default HomePage;
