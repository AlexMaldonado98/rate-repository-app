import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data: dataGql = {}, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy, 
      orderDirection
    }
  });
  const { repositories = null } = dataGql;
  const data = repositories ? repositories.edges.map(edge => edge.node) : [];
  return { data, loading, refetch };
};

export default useRepositories;