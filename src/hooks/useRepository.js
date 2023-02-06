import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = () => {
    console.log("useRepository2");
    const { repoId } = useParams();
    const { data, loading, refetch } = useQuery(GET_REPOSITORY,
        {
            fetchPolicy:'cache-and-network',
            variables: {
                id: repoId
            }
        });

    return {
        data: data?.repository,
        loading,
        refetch
    };
};

export default useRepository;