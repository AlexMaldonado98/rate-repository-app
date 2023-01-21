import { View, StyleSheet } from 'react-native';
import TextCustom from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: Constants.statusBarHeight/2,
        paddingBottom: Constants.statusBarHeight,
        justifyContent: 'flex-end',
        backgroundColor: theme.appBarTap.colorBar,
    },
    text:{
        paddingTop: (Constants.statusBarHeight*1.5),
        color: 'white',
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <TextCustom fontWeight='bold' style={styles.text}>Repositories</TextCustom>
        </View>
    );
};

export default AppBar;