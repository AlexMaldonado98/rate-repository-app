import { Text, View, StyleSheet, Alert } from 'react-native';
import TextCustom from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';
import { Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import useDeleteReview from '../../hooks/useDeleteReview';

const ReviewItem = ({ review, modeMyReviews = false, refetch }) => {
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
        },
        containerButtons: {
            flexDirection: 'row',
            position: 'relative',
            left: -80,
            justifyContent: 'center',
            width: '130%',
        },
        button: {
            borderRadius: 5,
            width: '40%',
            margin: 10,
            padding: 5
        },
        buttonDelete: {
            backgroundColor: theme.colors.error,
        },
        buttonView: {
            backgroundColor: theme.colors.primary,
        }
    });

    const [deleteReview] = useDeleteReview();
    const navigate = useNavigate();


    const goRepository = () => {
        navigate(`/repository/${review.repository.id}`);
    };

    const handleDeleteReview = () => {
        Alert.alert('Alert', 'Do you want to delete this review?', [{
            text: 'DELETE',
            onPress: async () => {
                await deleteReview(review.id);
                refetch();
            },
            style:'destructive'
        },
        {
            text: 'Cancele',
            style:'cancel'
        }
        ]);
    };
    
    return (
        <View style={style.container}>
            <View style={{ flexBasis: '20%', alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={style.ratingContainer}>
                    <TextCustom color='primary' fontWeight='bold' fontSize='subheading' >
                        {review.rating}
                    </TextCustom>
                </View>
            </View>
            <View style={{ flexBasis: '80%' }}>
                <View style={{ marginBottom: 7, justifyContent: "flex-start" }}>
                    <TextCustom fontWeight='bold' fontSize='subheading' style={style.username} >{review.user.username}</TextCustom>
                    <TextCustom fontWeight='bold' color='textSecondary' >{format(new Date(review.createdAt), 'dd.MM.yyyy')}</TextCustom >
                </View>
                <View>
                    <Text>{review.text}</Text>
                </View>
                {
                    modeMyReviews && (
                        <View style={style.containerButtons}>
                            <Button style={[style.button, style.buttonView]} onPress={goRepository} textColor='white'>View repository</Button>
                            <Button style={[style.button, style.buttonDelete]} onPress={handleDeleteReview} textColor='white' >Delete review</Button>
                        </View>
                    )
                }
            </View>
        </View>
    );
};

export default ReviewItem;