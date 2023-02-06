import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
    const [CreateReview, result] = useMutation(CREATE_REVIEW);
    
    const createReview = async (values) => {
        const response = await CreateReview({
            variables: {
                review: {
                    ownerName: values.ownerName,
                    repositoryName: values.repositoryName,
                    rating: Number(values.rating),
                    text: values?.text || ''
                }
            }
        });
        const { data } = response;
        return data;
    };


    return [createReview,result];
};

export default useReview;
