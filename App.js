import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient.js';
import Constants from 'expo-constants';
import AuthStorage from './src/utils/authStorage.js';
import AuthStorageContext from './src/contexts/AuthStorageContext.js';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {

  console.log(Constants.manifest);

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage} >
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='light' />
    </>
  );

};

export default App;