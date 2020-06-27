import React from 'react';
import MealItem from './MealItem';
import { useSelector } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native';

const MealList = props => {

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {
        
        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id);
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelectMealItem={() => {
                    // console.log(itemData.item);
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavourite
                        }
                    })
                }} />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={props.displayMeals}
                keyExtractor={(item, index) => item.id}
                style={styles.listContainer}
                renderItem={renderMealItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    listContainer: {
        width: '100%'
    }
});

export default MealList;