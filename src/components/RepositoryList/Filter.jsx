import { View } from 'react-native';
import TextCustom from '../Text';
import { Button, Menu, Divider } from 'react-native-paper';
import { useState } from 'react';

const Filter = ({ changeFilter,FilterCurrent }) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);


    return (
        <View
            style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: "center"
            }}>
            <View><TextCustom color='primary' fontWeight='bold'>{FilterCurrent}</TextCustom></View>
            <Menu
                anchorPosition='bottom'
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu} >Filter</Button>}>
                <Menu.Item onPress={() => {
                    changeFilter('CREATED_AT', 'DESC', 'Latest Repositories');
                    closeMenu();
                }} title='Latest Repositories' />
                <Divider />
                <Menu.Item onPress={() => {
                    changeFilter('RATING_AVERAGE', 'DESC','Highest rated Repositories');
                    closeMenu();
                }} title='Highest rated Repositories' />
                <Divider />
                <Menu.Item onPress={() => {
                    changeFilter('RATING_AVERAGE', 'ASC', 'Lowest rated Repositories');
                    closeMenu();
                }} title='Lowest rated Repositories' />
            </Menu>
        </View>
    );
};

export default Filter;