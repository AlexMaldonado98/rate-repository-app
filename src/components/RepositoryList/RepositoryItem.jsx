import { View, StyleSheet } from "react-native";
import Header from './Header';
import Body from "./Body.jsx";
import * as Linking from 'expo-linking';
import Button from '../Button';
// import TextCustom from './Text.jsx';

const style = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white'
    },
    button:{
        marginTop:10
    }
});

const RepositoryItem = ({ item, itemView = false }) => {

    const openGithub = () => {
        Linking.openURL(item.url);
    };

    return (
        <View testID="repositoryItem" style={style.container} >
            <Header item={item} />
            <Body item={item} />
            {
                itemView && <Button styles={style.button} onPress={openGithub} title='Open github' />
            }
        </View>
    );
};

export default RepositoryItem;