import {StyleSheet} from 'react-native';
import { useField } from "formik";
import theme from "../theme";
import Text from './Text';
import TextInput from "./TextInput";

const style = StyleSheet.create({
    errorField: {borderWidth: 1, borderColor: 'red'}
});

export const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    const styles = [props.style,showError && style.errorField];

    return (
        <>
            <TextInput
                name={name}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
                style={styles}
            />
            {showError && <Text style={{color:theme.colors.error}} fontWeight='bold'>{meta.error}</Text>}
        </>
    );
};
export default FormikTextInput;