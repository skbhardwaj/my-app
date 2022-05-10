import { gql } from "@apollo/client";
import { ISSUE_DETAIL_FRAGMENT, ISSUE_FRAGMENT } from "./graphql.fragments";

export const QUERY_FETCH_ISSUES_LIST = gql`
  ${ISSUE_FRAGMENT}
  query fetchIssues($query: String!) {
    search(query: $query, type: ISSUE, first: 5) {
      issueCount
      nodes {
        ...IssueFragment
      }
    }
  }
`;

export const QUERY_FETCH_ISSUE_DETAILS = gql`
  ${ISSUE_DETAIL_FRAGMENT}
  query fetchIssueDetails($id: ID!) {
    node(id: $id) {
      ...IssueDetailFragment
    }
  }
`;

// export const FETCH_ISSUE_COMMENTS = gql`
// `;
