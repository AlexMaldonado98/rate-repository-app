import { useApolloClient, useMutation } from "@apollo/client";
import { SING_IN } from "../graphql/mutations";
import useAuthStorage from './useAuthStorage';


const useSingIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const [Authenticate, result] = useMutation(SING_IN);

    const singIn = async ({ username, password }) => {
        const result = await Authenticate({ variables: { credentials: { password, username } } });
        const { data } = result;
        authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        return result;
    };

    return [singIn, result];
};

export default useSingIn;