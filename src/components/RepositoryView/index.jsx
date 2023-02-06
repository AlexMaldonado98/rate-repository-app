import { View, Text, FlatList,StyleSheet } from 'react-native';
import useRepository from '../../hooks/useRepository';
import ReviewItem from './ReviewItem';
import RepositoryItem from '../RepositoryList/RepositoryItem';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
    const { data, loading } = useRepository();

    console.log("useRepository");

    if (loading) {
        return <View><Text>Loading ...</Text></View>;
    }

    const reviews = data ? data.reviews.edges.map(repo => repo.node) : [];

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryItem itemView={true} item={data} />}
        />
    );
};

export default RepositoryView;