import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import Colors from "../constants/colors";
import HeaderButton from "../components/HeaderButton";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={1} />
  );
};
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
