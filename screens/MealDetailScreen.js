import React, {useEffect, useCallback} from 'react';
import { View, StyleSheet, ScrollView, Button, Text, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import BodyText from '../components/BodyText';
import { toggleFavourite } from '../store/actions/meals';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <BodyText>{props.children}</BodyText>
        </View>
    )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavourite = useSelector(state => 
        state.meals.favouriteMeals.some(meal => meal.id === mealId)
    );
    const mealData = availableMeals.find(meal => meal.id === mealId);
    
    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavouriteHandler})
    }, [toggleFavouriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavourite})
    }, [currentMealIsFavourite]);

    return (
        <ScrollView>
            <Image source={{uri: mealData.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <BodyText>{mealData.duration} min</BodyText>
                <BodyText>{mealData.complexity}</BodyText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {mealData.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {mealData.steps.map(step => (
                <ListItem key={step}>{step}</ListItem>
            ))}
            <View>
                <Button
                    title='Back to categories'
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                />
            </View>
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {

    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavourite = navigationData.navigation.getParam('toggleFav');    
    const isFavourite = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title='Favourite' 
                iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavourite} />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        textAlign: 'center'
    },
    listItem: {
        marginHorizontal: 15,
        padding: 10,
        
    }
});

export default MealDetailScreen;