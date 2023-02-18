import { gql } from '@apollo/client';

export const SING_IN = gql`
    mutation Authenticate($credentials:AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;


export const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            user {
                username
            }
            rating
            text
            repositoryId
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!) {
        createUser(user: {username: $username, password: $password}) {
            id
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation DeleteReview($id: ID!){
        deleteReview(id: $id)
    }
`;