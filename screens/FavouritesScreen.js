import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
    if (favouriteMeals.length === 0) {
        return <View style={styles.screen}>
                <Text>You haven't added any favourite meals yet !!</Text>
            </View>
    }
    return (
        <MealList
            displayMeals={favouriteMeals}
            navigation={props.navigation} />
    );
}

FavouritesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Favourites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navigationData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouritesScreen;