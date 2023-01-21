import { View, StyleSheet, ScrollView} from 'react-native';
import TextCustom from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: Constants.statusBarHeight / 2,
        paddingBottom: Constants.statusBarHeight/2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: theme.appBarTap.colorBar,
    },
    text: {
        paddingTop: (Constants.statusBarHeight * 1.5),
        color: 'white',
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal >
                <Link to='/' style={{ marginRight: 10}}>
                    <View>
                        <TextCustom fontWeight='bold' style={styles.text}>Repositories</TextCustom>
                    </View>
                </Link>
                <Link to='/singin'>
                    <View>
                        <TextCustom fontWeight='bold' style={styles.text}>Sing In</TextCustom>
                    </View>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;