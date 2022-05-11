import { Dispatch } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SET_END_CURSOR, SET_START_CURSOR } from '../../containers/HomePage/slice';
import { Issue, useFetchIssuesQuery } from '../../graphql/__generated__/generated-types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import InfoLabel from '../InfoLabel';
import { IIssuesListProps } from './types';


const IssuesListContainer = styled.div`
margin: 0 auto;
width: 80%;
position: relative;
`;

const PaginationButton = styled.button`
position: absolute;
top: 50%;
padding: 0.75rem 1rem;
border: 1px solid #ccc;
border-radius:50%;
/* display: none; */

&.prev {
  left: -3rem;
}
&.next {
  right: -3rem;
}
`;

const IssuesUl = styled.ul`
  
`;

const IssuesLi = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.125rem;
  border-radius: 5px;
  background-color: var(--color-bg);

  &:last-child {
    margin-bottom: 0;
  }  
  &:hover {
    opacity: 0.85;
  }

`;

const actionDispatch = (dispatch: Dispatch) => ({
  setStartCursor: (data: any) => dispatch(SET_START_CURSOR(data)),
  setEndCursor: (data: any) => dispatch(SET_END_CURSOR(data)),
});

const IssuesList = (props: IIssuesListProps) => {
  const { keyword, type } = useAppSelector((state) => state.homePage);

  const { setStartCursor, setEndCursor } = actionDispatch(useAppDispatch());

  const query = `${process.env.REACT_APP_GITHUB_REPO}${keyword ? ` ${keyword} in:title,body` : ""} is:${type} type:issue`;
  const { loading, error, data } = useFetchIssuesQuery({ variables: { query } });

  if (loading) {
    return (
      <IssuesListContainer>
        <InfoLabel labelVariant={'message'} text={'Fetching data ...'} />
      </IssuesListContainer>
    );
  }

  if (error) {
    return (
      <IssuesListContainer>
        <InfoLabel labelVariant={'error'} text={`Error occurred while fetching results: ${error.message}`} />
      </IssuesListContainer>
    );
  }

  if (!data || !data.search || !data.search.nodes) {
    return null;
  }

  const { issueCount, pageInfo, nodes } = data.search;
  const { hasNextPage, hasPreviousPage, endCursor, startCursor } = pageInfo;
  const issues = nodes as Issue[];

  const onPrevClickHandler = () => {
    console.log({ endCursor, startCursor });
    // setStartCursor(startCursor);
    setEndCursor(endCursor);
  }

  const onNextClickHandler = () => {
    console.log({ endCursor, startCursor });
    setStartCursor(startCursor);
    // setEndCursor(endCursor);
  }


  return (
    <>
      <IssuesListContainer>
        <>
          <InfoLabel labelVariant={'success'} text={`Showing ${issues.length}/${issueCount} results !`} />

          <IssuesUl>
            {issues.map(({ id, title }) => (
              <IssuesLi key={id}>
                <Link to={`/issue/${id}`}>{title}</Link>
              </IssuesLi>
            ))}
          </IssuesUl>
          {
            issues.length ? (
              <>
                <PaginationButton onClick={onPrevClickHandler} disabled={!hasPreviousPage} className='prev'>{'<'}</PaginationButton>
                <PaginationButton onClick={onNextClickHandler} disabled={!hasNextPage} className='next'>{'>'}</PaginationButton>
              </>
            ) : null
          }
        </>
      </IssuesListContainer>
    </>
  );
};

export default IssuesList;
