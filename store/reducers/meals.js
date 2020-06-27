import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favouriteMeals: updatedFavMeals
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favouriteMeals: state.favouriteMeals.concat(meal)
                }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if(appliedFilters.isGlutenFree && !meal.isGlutenFree) 
                    return false;
                if(appliedFilters.isLactoseFree && !meal.isLactoseFree)
                    return false;
                if(appliedFilters.isVegan && !meal.isVegan)
                    return false;
                if(appliedFilters.isVegetarian && !meal.isVegetarian)
                    return false;
                return true;
            });
            // console.log(filteredMeals);
            return {
                ...state,
                filteredMeals: filteredMeals
            }
        default:
            return state;       
    }
}

export default mealsReducer;