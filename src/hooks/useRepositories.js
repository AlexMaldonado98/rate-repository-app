import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data: dataGql = {}, loading, refetch, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy, 
      orderDirection,
      searchKeyword
    }
  });
  const { repositories = null } = dataGql;
  const data = repositories ? repositories.edges.map(edge => edge.node) : [];
  return { data, loading, refetch, error };
};

export default useRepositories;