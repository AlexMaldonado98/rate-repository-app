import { Text, View, StyleSheet } from 'react-native';
import TextCustom from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => {
    const style = StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 10

        },
        ratingContainer: {
            borderWidth: 2,
            width: 50,
            height: 50,
            borderColor: theme.colors.primary,
            borderRadius: 50 / 2,
            alignItems: 'center',
            justifyContent: 'center'
        },
        usernameText: {
            color: 'black'
        }
    });
    return (
        <View style={style.container}>
            <View style={{ flexBasis: '20%', alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={style.ratingContainer}>
                    <TextCustom color='primary' fontWeight='bold' fontSize='subheading' >
                        {review.rating}
                    </TextCustom>
                </View>
            </View>
            <View style={{ position: 'relative' }}>
                <View style={{ marginBottom: 7, justifyContent: "flex-start" }}>
                    <TextCustom fontWeight='bold' fontSize='subheading' style={style.username} >{review.user.username}</TextCustom>
                    <TextCustom fontWeight='bold' color='textSecondary' >{format(new Date(review.createdAt),'dd.MM.yyyy')}</TextCustom >
                </View>
                <View>
                    <Text>{review.text}</Text>
                </View>
            </View>
        </View>
    );
};

export default ReviewItem;