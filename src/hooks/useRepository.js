import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (values) => {
    const { repoId } = useParams();
    const { data, loading, refetch, fetchMore, error } = useQuery(GET_REPOSITORY,
        {
            fetchPolicy: 'cache-and-network',
            variables: {
                id: repoId,
                first: values.first
            }
        });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if(!canFetchMore){
            return;
        }

        fetchMore({
            variables:{
                id: repoId,
                ...values,
                after: data.repository.reviews.pageInfo.endCursor
            }
        });
    };


    return {
        data: data?.repository,
        loading,
        refetch,
        fetchMore: handleFetchMore,
        error
    };
};

export default useRepository;