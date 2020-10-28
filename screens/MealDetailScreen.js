import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("id");
  const displayedMeals = useSelector(state => state.meals.filteredMeals).find((meal) => meal.id === mealId);
  const renderMealIngredients = (itemData) => {
    return (
      <Text numberOfLines={2}>{itemData.item}</Text>
    )
  }

  const renderMealSteps = (itemData) => {
    return (
      <Text numberOfLines={2}>{itemData.item}</Text>
    )
  }
  
  return (
    <View style={styles.screen}>
      <Image source={{uri:displayedMeals.imageUrl}} style={styles.image}/>
      <ScrollView>
        <View style={{ ...styles.textRow, ...styles.center}} >
          <Text style={styles.textBold}>{displayedMeals.duration} M </Text>
          <Text style={styles.textBold}>{displayedMeals.complexity.toUpperCase()} </Text>
          <Text style={styles.textBold}>{displayedMeals.affordability.toUpperCase()} </Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.textBold}>Ingredients</Text>
        
        <ScrollView>
          <FlatList
            data={displayedMeals.ingredients}
            renderItem={renderMealIngredients}
          />
        </ScrollView>
        </View>
        <View style={styles.center}>
          <Text style={styles.textBold}>Steps</Text>
        <ScrollView>
          <FlatList
            style={{marginLeft: 10}}
            data={displayedMeals.steps}
            renderItem={renderMealSteps}
          />
        </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.gridItem}
        >
          <View style={{ ...styles.container, ...{ backgroundColor: "lightblue" } }} >
          <Text style={styles.textBold}>Go Back To Categories</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const id = navigationData.navigation.getParam("id");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
        title="Menu"
        iconName="ios-star"
        onPress={() => {

        }}
        />
        </HeaderButtons>
      )
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textRow: {
    flexDirection: "row"
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 18
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    margin: 15,
    height: 50,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default MealDetailScreen;
