import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchKeyword, first }) => {
  const { data: dataGql = {}, loading, refetch, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword,
      first
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && dataGql.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: dataGql.repositories.pageInfo.endCursor,
        orderBy,
        orderDirection,
        searchKeyword,
        first
      },
    });
  };


  const { repositories = null } = dataGql;
  const data = repositories ? repositories.edges.map(edge => edge.node) : [];
  return { data, loading, refetch, error, fetchMore: handleFetchMore };
};

export default useRepositories;