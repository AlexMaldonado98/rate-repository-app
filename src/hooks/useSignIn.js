import { useMutation } from "@apollo/client";
import { SING_IN } from "../graphql/mutations";

const useSingIn = () => {
    const [Authenticate,result] = useMutation(SING_IN);

    const singIn = async({username,password}) => {
        const result = await Authenticate({variables:{credentials:{password,username}}});
        return result;
    };

    return [singIn,result];
};

export default useSingIn;