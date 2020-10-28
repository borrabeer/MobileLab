import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE} from "../actions/mealsAction";


const initialState = {
    meals: MEALS,
    filteredMeals : MEALS,
    favoriteMeals: {}
}

const mealReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const mealIndex = state.favoriteMeals.findIndex((meal) => meal.id === action.mealId);
        default:
            return state;
    }
}

export default mealReducer;