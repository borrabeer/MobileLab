import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favourites"
  }
}

export default FavoritesScreen;
