import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";



const useCreateUser = () => {
    const [CreateUser, result] = useMutation(CREATE_USER);

    const createUser = async (values) => {
        const response = await CreateUser({
            variables: {
                username: values.username,
                password: values.password
            }
        });
        const {data} = response;
        return data;
    };

    return [createUser, result];
};

export default useCreateUser;