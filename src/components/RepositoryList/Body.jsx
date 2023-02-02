import { View, StyleSheet } from 'react-native';
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

//this function avoid the rounding by toFixed(number) funtion
export const cutAfterDot = (numberWithDecimals,decimalsAfterDot) => {
    const str = String(numberWithDecimals);
    return str.slice(0,str.indexOf('.') + 1 + decimalsAfterDot);
};

export const stats = (number) => {
    
    if(number < 1000) {
        return `${number}`;
    }
    
    const format = [
        {
            key: 'K',
            value: 1e3
        },
        {
            key: 'M',
            value: 1e6
        },
        {
            key: 'B',
            value: 1e9
        }
    ];

    for(let i = format.length - 1; i >= 0; i-- ){
        if(number >= format[i].value){
            if(number % format[i].value === 0){
                return `${(number/format[i].value)}${format[i].key}`;
            }
            const strWithDecimals = String(number/format[i].value);
            return `${cutAfterDot(strWithDecimals,1)}${format[i].key}`;
        }
    }

};

const Item = ({ title, value }) => {
    return (
        <View style={style.containerBodyItem} >
            <View>
                <TextCustom style={{ color: 'black' }} fontWeight='bold' >
                    {stats(value)}
                </TextCustom>
            </View>
            <View><TextCustom >{title}</TextCustom></View>
        </View>
    );
};

const Body = ({ item }) => {

    return (
        <View style={style.containerBody}>
            <Item title='Stars' value={item.stargazersCount} />
            <Item title='Forks' value={item.forksCount} />
            <Item title='Reviews' value={item.reviewCount} />
            <Item title='Rating' value={item.ratingAverage} />
        </View>
    );
};

export default Body;