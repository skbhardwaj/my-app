import apolloClient from "../../apolloClient";
import { QUERY_FETCH_ISSUES_LIST, QUERY_FETCH_ISSUE_DETAILS } from './../../graphql/graphql.queries';

class GitHubService {
  async fetchIssues(query: string) {
    const response = await apolloClient.query({
      query: QUERY_FETCH_ISSUES_LIST,
      variables: {
        query
      }
    });
    return response;
  }

  async fetchIssueDetails(id: string) {
    const response = await apolloClient.query({
      query: QUERY_FETCH_ISSUE_DETAILS,
      variables: {
        id
      }
    });
    return response;
  }
}

export default new GitHubService();
