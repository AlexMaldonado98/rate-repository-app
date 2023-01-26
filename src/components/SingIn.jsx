import { Formik } from 'formik';
import SingInForm from './SingInForm';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5,'a minimum of 5 characters is required').required('Username is required'),
  password: yup.string().min(5,'a minimum of 5 characters is required').required('Password is required')
});

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;