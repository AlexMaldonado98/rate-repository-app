import { gql } from '@apollo/client';

export const PREVIEW_REPOSITORIES_DATA = gql`
    fragment PreviewRepositoriesData on Repository {
        id
        fullName
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
        ratingAverage
    }
`;