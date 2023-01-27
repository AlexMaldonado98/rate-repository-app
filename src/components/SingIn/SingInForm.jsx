import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../../theme";
import FormikTextInput from "./FormikTextInput";

const style = StyleSheet.create({
    container:{
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    inputStyle: {
        color: 'blue',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
    buttomSubmit:{
        margin: 5,
        backgroundColor: theme.colors.primary,
        height:'20%',
        alignItems: 'center',
        justifyContent:'center',
    },
    text:{
        color:'white'
    },
    borderRadius:{
        borderRadius: 5
    }
});

const SingInForm = ({ onSubmit }) => {
    return (
        <View style={style.container}>
            <FormikTextInput name='username' placeholder="Username" style={[style.inputStyle,style.borderRadius]} />
            <FormikTextInput name='password' placeholder="Password" style={[style.inputStyle,style.borderRadius]} secureTextEntry={true}/>
            <Pressable onPress={onSubmit} style={[style.buttomSubmit,style.borderRadius]}>
                <Text style={style.text} >Sing in</Text>
            </Pressable>
        </View>
    );
};

export default SingInForm;