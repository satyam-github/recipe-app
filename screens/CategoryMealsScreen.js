import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryId = props.navigation.getParam('categoryId');
    const displayMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );
    // console.log(displayMeals);
    if(displayMeals.length === 0)
        return <View style={styles.screen}>
            <Text>There is no recipe for the applied filter</Text>
        </View>

    return (
        <MealList
            displayMeals={displayMeals}
            navigation={props.navigation} />
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;