import { TextInput as NativeTextInput} from "react-native";

const TextInput = ({style,...pros}) => {
    const styles = style;
    return <NativeTextInput style={styles} {...pros} />;

};

export default TextInput;