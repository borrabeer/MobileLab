// import คอมโพเนนต์ที่จำเป็น
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories:{
      screen: CategoriesScreen
    },
    CategoryMeals:{
      screen: CategoryMealsScreen
    },
    MealDetail:{
      screen: MealDetailScreen
    }
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white"
    }
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavoritesScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white"
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (<Ionicons name="ios-restaurant" size={24} color="black" />)
        }
      }
    },
    Favourites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (<Ionicons name="ios-star" size={24} color="black" />)
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor : "#4a148c"
      }
    }
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters:{
      screen: FiltersScreen
    }
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: "#4a148c",
      },
      headerTintColor: "white"
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav:{
      screen: MealsFavTabNavigator,
      navigationOptions:{
        drawerLabel: "Meals"
      }
    },
    Filters: {
      screen: FiltersNavigator
    },

  },
  {
    defaultNavigationOptions: {
      contentOptions: {
        activeTintColor: "#4a148c"
      }
    }
  }
)

export default createAppContainer(MainNavigator);
