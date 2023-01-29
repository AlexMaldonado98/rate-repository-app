import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient.js';
import Constants from 'expo-constants';

const apolloClient = createApolloClient()

const App = () => {

  console.log(Constants.manifest)

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='light' />
    </>
  );

};

export default App;