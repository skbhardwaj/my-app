import styled from 'styled-components';
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

const IssuesList = (props: IIssuesListProps) => {
  const { data, loading, error } = props?.result;

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

  if (!data) {
    return (
      <IssuesListContainer>
        <InfoLabel labelVariant={'error'} text={`No Results found ... 😞`} />
      </IssuesListContainer>
    );
  }

  const { issueCount, pageInfo, nodes } = data.search;
  const { hasNextPage, hasPreviousPage } = pageInfo;
  // const { number } = nodes;


  return (
    <>
      <IssuesListContainer>
        <>
          <InfoLabel labelVariant={'success'} text={`Showing ${issueCount} of results !`} />
          {/* <IssuesUl>
            {data.map(({ id, title }) => (
              <IssuesLi key={id}>
                <Link to={`/issue/${id}`}>{title}</Link>
              </IssuesLi>
            ))}
          </IssuesUl> */}
          <PaginationButton disabled={!hasPreviousPage} className='prev'>{'<'}</PaginationButton>
          <PaginationButton disabled={!hasNextPage} className='next'>{'>'}</PaginationButton>
        </>
      </IssuesListContainer>
    </>
  );
};

export default IssuesList;
