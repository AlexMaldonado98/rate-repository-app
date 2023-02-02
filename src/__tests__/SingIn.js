import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SingInContainer } from '../components/SingIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      
      const {getByPlaceholderText, getByText} = render(<SingInContainer onSubmitProp={onSubmit} />);
      const UsernameInput = getByPlaceholderText('Username');
      const PasswordInput = getByPlaceholderText('Password');
      const SubmitButton = getByText('Sing in');

      fireEvent.changeText(UsernameInput,'matti');
      fireEvent.changeText(PasswordInput,'password');
      fireEvent.press(SubmitButton);

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
            username:'matti',
            password:'password'
        });
      });
    });
  });
});