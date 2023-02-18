import { gql } from '@apollo/client';
import { PREVIEW_REPOSITORIES_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  ${PREVIEW_REPOSITORIES_DATA}
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
      repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
        edges {
          node {
            ...PreviewRepositoriesData
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
`;


export const GET_ME = gql`
  query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String){
   me{
    reviews(first: $first, after: $after) @include(if: $includeReviews) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          rating
          createdAt
          text
          user {
            username
            id
          }
          id
          repository{
            id
          }
        }
      }
    }
    id
    username
   } 
  }
`;

export const GET_REPOSITORY = gql`
  ${PREVIEW_REPOSITORIES_DATA}
query Repository($id: ID!, $first: Int, $after: String) {
  repository(id: $id, ) {
    ...PreviewRepositoriesData
    url
    reviews (first: $first, after: $after){
      totalCount
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo{
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`;