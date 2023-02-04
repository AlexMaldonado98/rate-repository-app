import { View,Text } from 'react-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryList/RepositoryItem';
// import RepositoryItem from "../RepositoryList/RepositoryItem";

const RepositoryView = () => {
    const {data,loading} = useRepository();

    if(loading) {
        return <View><Text>Loading ...</Text></View>;
    }

    console.log(data);

    return <RepositoryItem itemView={true} item={data} />;
};

export default RepositoryView;