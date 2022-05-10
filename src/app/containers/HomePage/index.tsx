import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Heading from '../../components/Heading';
import SearchBox from '../../components/SearchBox';
import styles from '../../styles';
import { STANDARD_TIMEOUT } from '../../utils/constants';
import { IHomePageProps } from './types';

const HomePageContainer = styled.div`
  ${styles.Page}
`;


const getData = async (searchKeyword: string, issueType: string) => {
  const query = `${process.env.REACT_APP_GITHUB_REPO}${searchKeyword ? ` ${searchKeyword} in:title,body` : ""} is:${issueType} type:issue`;
  console.log('getData--->>>', { searchKeyword, issueType, query });

  // dispatch action !!

  // const { loading, error, data } = useFetchIssuesQuery({ variables: { query } });
  // console.log({ loading, error, data });
}

// const actionDispatch = (dispatch: Dispatch) => ({
//   setDetails: (pageData: Issue) => dispatch(SET_DETAILS_PAGE(pageData))
// });

const HomePage = (props: IHomePageProps) => {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('OPEN');
  const delayedQuery = useCallback(debounce((keyword, type) => getData(keyword, type), STANDARD_TIMEOUT), []);
  // const [result, setResult] = useState<any | []>();

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    delayedQuery(value, type);
  }

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setType(value);
    delayedQuery(keyword, value);
  }

  return (
    <HomePageContainer>
      <Heading text={'React GH Issues Explorer'} />
      <SearchBox keyword={keyword} handleKeywordChange={handleKeywordChange} type={type} handleTypeChange={handleTypeChange} />
      {/* <IssuesList result={result} /> */}
    </HomePageContainer>
  );
};

export default HomePage;
