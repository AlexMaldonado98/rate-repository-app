import { Formik } from 'formik';
import SingInForm from './SingInForm';
import * as yup from 'yup';
import useSingIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';


export const SingInContainer = ({onSubmitProp}) => {
  const initialValues = {
    username: '',
    password: ''
  };
  
  const validationSchema = yup.object().shape({
    username: yup.string().min(5, 'a minimum of 5 characters is required').required('Username is required'),
    password: yup.string().min(5, 'a minimum of 5 characters is required').required('Password is required')
  });

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitProp} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const navigate = useNavigate();
  const [singIn] = useSingIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await singIn({ username, password });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SingInContainer onSubmitProp={onSubmit} />
  );
};

export default SignIn;