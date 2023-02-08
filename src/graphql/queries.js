import { gql } from '@apollo/client';
import { PREVIEW_REPOSITORIES_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  ${PREVIEW_REPOSITORIES_DATA}
  query Repositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!){
      repositories (orderBy: $orderBy, orderDirection: $orderDirection) {
        edges {
          node {
            ...PreviewRepositoriesData
          }
        }
      }
    }
`;


export const GET_ME = gql`
  query{
   me{
    id
    username
   } 
  }
`;

export const GET_REPOSITORY = gql`
  ${PREVIEW_REPOSITORIES_DATA}
query Repository($id: ID!) {
  repository(id: $id) {
    ...PreviewRepositoriesData
    url
    reviews {
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
      }
    }
  }
}
`;