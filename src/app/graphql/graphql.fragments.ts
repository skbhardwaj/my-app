import { gql } from '@apollo/client';


export const ACTOR_FRAGMENT = gql`
  fragment ActorFragment on Actor {
    login
    avatarUrl
    url
  }
`;

export const ISSUE_FRAGMENT = gql`
  ${ACTOR_FRAGMENT}
  fragment IssueFragment on Issue {
    __typename
    state
    id
    url
    closed
    title
    bodyUrl
    createdAt
    updatedAt
    author {
      ...ActorFragment
    }
  }
`;

export const ISSUE_DETAIL_FRAGMENT = gql`
  ${ISSUE_FRAGMENT}
  ${ACTOR_FRAGMENT}
  fragment IssueDetailFragment on Issue {
    ...IssueFragment
    
    bodyHTML
    comments(first:5) {
      totalCount
      edges {
        node {
          id
          body
          author {
            ...ActorFragment
          }
        }
      }
    }
  }
`;




