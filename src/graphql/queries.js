import { gql } from '@apollo/client';
import { PREVIEW_REPOSITORIES_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  ${PREVIEW_REPOSITORIES_DATA}
  query{
      repositories {
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