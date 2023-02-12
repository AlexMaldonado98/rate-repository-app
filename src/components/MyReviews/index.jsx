import {FlatList} from 'react-native';
import useCheckUser from '../../hooks/useCheckUser';
import { ItemSeparator } from '../RepositoryView';
import ReviewItem from '../RepositoryView/ReviewItem';
const MyReviews = () => {

    const {data,loading,fetchMore} = useCheckUser({first:8});

    if(loading){
        return;
    }

    const onEndReached = () => {
        fetchMore();
    };

    return(
        <FlatList
            data={data}
            renderItem={({item}) => <ReviewItem review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
        />
    );
};

export default MyReviews;