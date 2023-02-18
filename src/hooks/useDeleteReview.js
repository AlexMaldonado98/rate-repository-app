import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
    const [DeleteReview,result] = useMutation(DELETE_REVIEW);

    const deleteReview = async (id) => {
        const data = await DeleteReview({variables:{id}});
        return data;
    };

    return [deleteReview,result];

};

export default useDeleteReview;