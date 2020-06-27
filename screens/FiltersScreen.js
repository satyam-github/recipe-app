import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: 'light-pink', false: 'grey' }}
                value={props.state}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian
        }

        dispatch(setFilters(appliedFilters));
        navigation.navigate('Categories');
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filter your recipe</Text>
            <FilterSwitch
                label='Gluten Free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch
                label='Lactose Free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
}


FiltersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Save" 
                    iconName="ios-save" 
                    onPress={navigationData.navigation.getParam('save')} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 15
    },
    filterContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
});

export default FiltersScreen;