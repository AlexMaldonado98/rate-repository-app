import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import useAuthStorage from "./useAuthStorage";


const useUser = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();
    

    const singOutUser = async (to) => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        navigate(to);
    };

    return {
        singOutUser,
    };

};

export default useUser;