import {View,Text,Pressable, StyleSheet} from 'react-native';
import FormikTextInput from '../SingIn/FormikTextInput';
import { style } from '../SingIn/SingInForm';

const SingUpForm = ({onSubmit,disabled}) => {

    const styles = StyleSheet.create({
        buttonDisabled:{
            borderColor:'#999999',
            borderWidth:1,
            backgroundColor: '#cccccc',
            color: '#666666'
        }
    });

    const stylesArray = [
        style.buttomSubmit,
        style.borderRadius,
        disabled && styles.buttonDisabled
    ];

    return (
        <View style={style.container}>
            <FormikTextInput name='username' placeholder="Username" style={[style.inputStyle, style.borderRadius]} />
            <FormikTextInput name='password' placeholder="Password" style={[style.inputStyle, style.borderRadius]} secureTextEntry={true} />
            <FormikTextInput name='passwordConfirm' placeholder="Password confirmation" style={[style.inputStyle, style.borderRadius]} secureTextEntry={true} />
            <Pressable onPress={onSubmit} style={stylesArray}>
                <Text style={style.text} >Sing up</Text>
            </Pressable>
        </View>
    );
};


export default SingUpForm;