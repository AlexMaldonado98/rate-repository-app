import { gql } from '@apollo/client';

export const SING_IN = gql`
    mutation Authenticate($credentials:AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`;