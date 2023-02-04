import { Pressable, Text,StyleSheet } from "react-native";
import theme from "../theme";


const Button = ({onPress,title,styles,colorText = 'white',...props}) => {
    const style = StyleSheet.create({
        button:{
            backgroundColor: theme.colors.primary,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,

        },
        text:{
            fontWeight:theme.fontWeights.bold,
            fontSize: theme.fontSizes.subheading,
            color:colorText
        }
    });

    return (
        <Pressable onPress={onPress} style={[style.button,styles]} {...props}>
            <Text style={style.text}>
                {title}
            </Text>
        </Pressable>
    );
};

export default Button;