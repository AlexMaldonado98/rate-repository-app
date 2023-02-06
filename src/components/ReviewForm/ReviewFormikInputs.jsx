import { View, Pressable } from "react-native";
import FormikTextInput from "../SingIn/FormikTextInput";
import Text from "../Text";
import { style } from '../SingIn/SingInForm';
import TextCustom from '../Text';
import { StyleSheet } from "react-native";

const ReviewFormikInputs = ({ handleSubmit, error, disabled }) => {

    const styles = StyleSheet.create({
        disabledButton:{
            borderColor:'#999999',
            borderWidth:1,
            backgroundColor: '#cccccc',
            color: '#666666'
        }
    });

    const stylesArray = [
        style.buttomSubmit,
        style.borderRadius,
        disabled && styles.disabledButton
    ];
    return (
        <View style={style.container}>
            <TextCustom fontWeight='bold' fontSize='subheading' style={{ color: 'red' }} >{error}</TextCustom>
            <FormikTextInput style={[style.inputStyle, style.borderRadius]} placeholder='Repository owner name' name='ownerName' />
            <FormikTextInput style={[style.inputStyle, style.borderRadius]} placeholder='Repository name' name='repositoryName' />
            <FormikTextInput style={[style.inputStyle, style.borderRadius]} placeholder='Rating between 0 and 100' name='rating' type="number" />
            <FormikTextInput style={[style.inputStyle, style.borderRadius]} placeholder='Review' multiline={true} name='text' />
            <Pressable onPress={handleSubmit} style={stylesArray} disabled={disabled} >
                <Text style={style.text}>Create review</Text>
            </Pressable>
        </View>
    );
};

export default ReviewFormikInputs;