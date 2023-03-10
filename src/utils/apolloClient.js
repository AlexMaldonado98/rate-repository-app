import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const { APOLLO_URI } = Constants.manifest.extra;

const httpLink = createHttpLink({
  uri: APOLLO_URI,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination()
      }
    },
    Repository: {
      fields: {
        reviews: relayStylePagination()
      }
    },
    User: {
      fields: {
        reviews: relayStylePagination()
      }
    }
  }
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const acceseToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: acceseToken ? `Bearer ${acceseToken}` : ''
        }
      };
    } catch (error) {
      console.log(error);
      return {
        headers
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;