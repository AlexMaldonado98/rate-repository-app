import { useField } from "formik";
import Text from './Text';
import TextInput from "./TextInput";

export const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    return (
        <>
            <TextInput
                name={name}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text style={{color:'red'}} fontWeight='bold'>{meta.error}</Text>}
        </>
    );
};
export default FormikTextInput;