import { Formik } from 'formik';
import SingInForm from './SingInForm';
import * as yup from 'yup';
import useSingIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5,'a minimum of 5 characters is required').required('Username is required'),
  password: yup.string().min(5,'a minimum of 5 characters is required').required('Password is required')
});

const SignIn = () => {
  const [singIn] = useSingIn();
  const onSubmit = async(values) => {
    const {username,password} = values
    try {
      const {data} = await singIn({username,password})
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;