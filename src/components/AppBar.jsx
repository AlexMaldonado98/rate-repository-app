import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import TextCustom from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: Constants.statusBarHeight / 2,
        paddingBottom: Constants.statusBarHeight / 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: theme.appBarTap.colorBar,
    },
    text: {
        paddingTop: (Constants.statusBarHeight * 1.5),
        color: 'white',
    },
    separatorRoute: {
        margin: 5
    }
});


const AppBar = () => {
    const { data } = useQuery(GET_ME, { fetchPolicy: 'cache-and-network' });
    const user = data ? data.me : undefined;
    const { singOutUser } = useUser();

    const singOut = () => {
        Alert.alert('', 'Do you want to sing out?', [
            {
                text: 'Cancel',
                style: 'calcel',
            },
            {
                text: 'Sing out',
                style: 'default',
                onPress: async () => {
                    await singOutUser('/singin');
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal >
                <Link to='/' style={styles.separatorRoute}>
                    <View>
                        <TextCustom fontWeight='bold' style={styles.text}>Repositories</TextCustom>
                    </View>
                </Link>
                {
                    user
                        ? (
                            <>
                                <Link to='/review' style={styles.separatorRoute}>
                                    <View>
                                        <TextCustom fontWeight='bold' style={styles.text}>Create review</TextCustom>
                                    </View>
                                </Link>
                                <Link onPress={singOut} style={styles.separatorRoute}>
                                    <View>
                                        <TextCustom fontWeight='bold' style={styles.text}>Sing Out</TextCustom>
                                    </View>
                                </Link>
                            </>
                        )
                        : (
                            <>
                                <Link to='/singin' style={styles.separatorRoute}>
                                    <View>
                                        <TextCustom fontWeight='bold' style={styles.text}>Sing In</TextCustom>
                                    </View>
                                </Link>
                                <Link to='/singup' style={styles.separatorRoute}>
                                    <View>
                                        <TextCustom fontWeight='bold' style={styles.text}>Sing up</TextCustom>
                                    </View>
                                </Link>
                            </>
                        )
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;