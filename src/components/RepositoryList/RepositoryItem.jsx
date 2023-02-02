import { View, StyleSheet } from "react-native";
import Header from './Header';
import Body from "./Body.jsx";
// import TextCustom from './Text.jsx';

const style = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white'
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View testID="repositoryItem" style={style.container} >
            <Header item={item} />
            <Body item={item} />
        </View>
    );
};

export default RepositoryItem;