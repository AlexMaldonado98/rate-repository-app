import { Formik } from "formik";
import * as yup from 'yup';
import useReview from "../../hooks/useReview";
import { useNavigate } from "react-router-native";
import ReviewFormikInputs from "./ReviewFormikInputs";
import { useState } from "react";

const initialValues = {
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: ''
};

const validationSchema = yup.object().shape({
    repositoryName: yup.string().min(3, 'must have at least 3 characters').required('repository name is required'),
    ownerName: yup.string().min(3, 'must have at least 3 characters').required('owner name is required'),
    rating: yup.number('the value must be an number').max(100, 'values gretest than one hundred are not allowed').min(0, 'values less than zero are not allowed').integer('the value must be an integer').required('rating is required'),
    text: yup.string().max(100, 'you can not write more then one hundred characters').optional()
});

export const ReviewFormContainer = ({ onSubmit, error }) => {
    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {({ handleSubmit, dirty, isValid }) => (
                <ReviewFormikInputs handleSubmit={handleSubmit} disabled={!dirty || !isValid} error={error} />
            )}
        </Formik>
    );
};


const ReviewForm = () => {
    const navigate = useNavigate();
    const [createReview] = useReview();
    const [error, setError] = useState(null);

    const onSubmit = async (values) => {
        try {
            const response = await createReview(values);
            navigate(`/repository/${response.createReview.repositoryId}`);
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError(null);
            }, 5000);
        }

    };

    return (
        <ReviewFormContainer onSubmit={onSubmit} error={error} />
    );
};

export default ReviewForm;