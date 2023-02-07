import { Formik } from 'formik';
import * as yup from 'yup';
import useCreateUser from '../../hooks/useCreateUser';
import SingUpForm from './SingUpForm';

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(1, 'must have at least one character').max(20, 'the maximum characters for the username is 30'),
    password: yup.string().required('Password is required').min(5, 'at least 5 characters are required for the password').max(50, 'maximum reached'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match').required('Password confirm is required')
});

export const SingUpContainer = ({ onSubmit }) => {

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} >
            {({ handleSubmit, dirty, isValid }) => (
                <SingUpForm disabled={!dirty || !isValid}  onSubmit={handleSubmit}/>
            )}
        </Formik>
    );
};

const SingUp = () => {
    const [createUser] = useCreateUser();

    const onSubmit = async (values) => {
        try {
            const response = await createUser(values);
            console.log('success',response);
        } catch (error) {
            console.log({error});
        }
    };

    return (
        <SingUpContainer onSubmit={onSubmit} />
    );
};

export default SingUp;

