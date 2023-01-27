import {View, StyleSheet } from 'react-native';
import TextCustom from '../Text';

const style = StyleSheet.create({
    containerBody: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    containerBodyItem: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
});

const Item = ({ title, value }) => {
    return (
        <View style={style.containerBodyItem} >
            <View>
                <TextCustom style={{ color: 'black' }} fontWeight='bold' >
                    {value > 999 ? `${Number(value / 1000).toFixed(1)}K` : value}
                </TextCustom>
            </View>
            <View><TextCustom >{title}</TextCustom></View>
        </View>
    );
};

const Body = ({ item }) => {

    return (
        <View style={style.containerBody}>
            <Item title='Stars' value={item.stargazersCount}/>
            <Item title='Forks' value={item.forksCount}/>
            <Item title='Reviews' value={item.reviewCount}/>
            <Item title='Rating' value={item.ratingAverage}/>
        </View>
    );
};

export default Body;