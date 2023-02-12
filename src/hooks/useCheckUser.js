import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const useCheckUser = (values) => {
    const {data,loading,error,refetch, fetchMore} = useQuery(GET_ME,{
        variables:{
            includeReviews: true,
            first: values?.first
        }
    });

    
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

        if(!canFetchMore){
            return;
        }
        
        fetchMore({
            variables:{
                includeReviews: true,
                ...values,
                after: data.me.reviews.pageInfo.endCursor,
            }
        });
    };
    
    const reviews = data?.me ? data.me.reviews.edges.map(edge => edge.node) : [];

    return {data:reviews,loading,error,fetchMore:handleFetchMore,refetch};
};

export default useCheckUser;

