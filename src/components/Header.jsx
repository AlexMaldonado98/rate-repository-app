import {View, StyleSheet, Image} from 'react-native';
import TextCustom from './Text';
import theme from '../theme';

const style = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        padding: 5
    },
    containerHeaderImageContainer:{
        padding:10,
        height:100
    },
    containerHeaderImage:{
        width: 66,
        height: 58,

    },
    containerHeaderDescriptionContainer:{
        justifyContent: 'flex-end',
        flex: 1
    }
});

const Header = ({ item }) => {
    return (
        <View style={style.containerHeader}>
            <View style={style.containerHeaderImageContainer}>
                <Image style={style.containerHeaderImage} source={{ uri: `${item.ownerAvatarUrl}` }} ></Image>
            </View>
            <View style={style.containerHeaderDescriptionContainer}>
                <View>
                    <TextCustom color='primary' fontWeight='bold' >{item.fullName}</TextCustom>
                    <TextCustom>{item.description}</TextCustom>
                </View>
                <View style={{ alignItems: 'flex-start' }}>
                    <TextCustom style={{ padding: 5, backgroundColor: theme.colors.primary, color: 'white', borderRadius: 10 }} >{item.language}</TextCustom>
                </View>
            </View>
        </View>
    );
};

export default Header;
