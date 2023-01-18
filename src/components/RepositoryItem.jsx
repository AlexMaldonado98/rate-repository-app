import { View, Text } from "react-native";

const RepositoryItem = ({item}) => {
    return(
        <View>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Lenguaje: {item.language}</Text>
            <Text>Start: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Review: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;