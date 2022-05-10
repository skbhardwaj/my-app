import { useParams } from "react-router-dom";
import styled from "styled-components";
import InfoLabel from "../../components/InfoLabel";
import IssueDetails, { IssueDetailsContainer } from "../../components/IssueDetails";
import { useFetchIssueDetailsQuery } from "../../graphql/__generated__/generated-types";
import styles from "../../styles";


const IssueDetailsPageContainer = styled.div`
  ${styles.Page}
`;

// const actionDispatch = (dispatch: Dispatch) => ({
//   setDetails: (pageData: Issue) => dispatch(SET_DETAILS_PAGE(pageData))
// });

// const IssueDetailsPage = () => {
//   const { id } = useParams() as any;
//   const { loading, error, data } = useFetchIssueDetailsQuery({ variables: { id } });
//   console.log('IssueDetailsPage:::', { loading, error, data });


// const { setDetails } = actionDispatch(useAppDispatch());
// const { pageData }: IIssueDetailsPageProps = useAppSelector((state) => state.detailsPage);
// const fetchIssueDetails = async () => {
//   if (!id) return;
//   // const { data, loading, error } = await GithubService.fetchIssueDetails(id);//.catch((err) => { console.log('Error', err) });
//   const { loading, error, data } = useFetchIssueDetailsQuery({ variables: { id } });
//   console.log('', { loading, error, data })
//   // if (data) {
//   //   setDetails(data);
//   // }
// };

// useEffect(() => {
//   // fetchIssueDetails();
//   console.log(id);
// }, [id]);

//   return (
//     <IssueDetailsPageContainer>
//       {/* <pre>
//         {JSON.stringify(data, null, 2)}
//       </pre> */}

//       <IssueDetails data={data} />
//     </IssueDetailsPageContainer>
//   );
// };


export const IssueDetailsPage = () => {
  const { id } = useParams() as any;
  const { data, loading, error } = useFetchIssueDetailsQuery({ variables: { id } });
  console.log({ data, loading, error });


  if (loading) {
    return (
      <IssueDetailsContainer>
        <InfoLabel labelVariant={'message'} text={'Fetching data ...'} />
      </IssueDetailsContainer>
    );
  }

  if (error) {
    return (
      <IssueDetailsContainer>
        <InfoLabel labelVariant={'error'} text={`Error occurred while fetching results: ${error.message}`} />
      </IssueDetailsContainer>
    );
  }


  return (
    <IssueDetailsPageContainer>
      <IssueDetails data={data} />
    </IssueDetailsPageContainer>
  );
}

export default IssueDetailsPage;
