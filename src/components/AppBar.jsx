import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import TextCustom from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link, useNavigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

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
    }
});


const AppBar = () => {
    const { data } = useQuery(GET_ME, { fetchPolicy: 'cache-and-network' });
    const user = data ? data.me : undefined;
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate()

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
                    await authStorage.removeAccessToken();
                    await apolloClient.resetStore();
                    navigate('/singin');
                },
            },
        ])
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal >
                <Link to='/' style={{ marginRight: 10 }}>
                    <View>
                        <TextCustom fontWeight='bold' style={styles.text}>Repositories</TextCustom>
                    </View>
                </Link>
                {
                    user
                        ? (
                            <Link to='/' onPress={singOut}>
                                <View>
                                    <TextCustom fontWeight='bold' style={styles.text}>Sing Out</TextCustom>
                                </View>
                            </Link>
                        )
                        : (
                            <Link to='/singin'>
                                <View>
                                    <TextCustom fontWeight='bold' style={styles.text}>Sing In</TextCustom>
                                </View>
                            </Link>
                        )
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;