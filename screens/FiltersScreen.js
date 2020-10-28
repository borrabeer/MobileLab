import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";
import Colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text>Available Filters / Restrictions</Text>
      <Text>Gluten-free</Text>
      <Switch trackColor={{true: "lightgreen", false: "gray"}} thumbColor={Colors.primary}
      value={isGlutenFree} onValueChange={()=> {
        isGlutenFree === true ? setIsGlutenFree(false) : setIsGlutenFree(true)
      }}/>
      <Text>Lactose-free</Text>
      <Switch trackColor={{true: "lightgreen", false: "gray"}} thumbColor={Colors.primary}
      value={isLactoseFree} onValueChange={()=> {
        isLactoseFree === true ? setIsLactoseFree(false) : setIsLactoseFree(true)
      }}/>
      <Text>Vegan</Text>
      <Switch trackColor={{true: "lightgreen", false: "gray"}} thumbColor={Colors.primary}
      value={isVegan} onValueChange={()=> {
        isVegan === true ? setIsVegan(false) : setIsVegan(true)
      }}/>
      <Text>Vegetarian</Text>
      <Switch trackColor={{true: "lightgreen", false: "gray"}} thumbColor={Colors.primary}
      value={isVegetarian} onValueChange={()=> {
        isVegetarian === true ? setIsVegetarian(false) : setIsVegetarian(true)
      }}/>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
        title="Menu"
        iconName="ios-list"
        onPress={() => {
        navigationData.navigation.toggleDrawer();
        }}
        />
        </HeaderButtons>
      )
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
        title="Menu"
        iconName="ios-save"
        
        />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
