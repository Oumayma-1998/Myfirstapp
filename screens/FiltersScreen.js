import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Switch } from "react-native-paper";

import Colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text> {props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Colors.accent}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };
  };
  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters, props.navigation]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newvalue) => setIsGlutenFree(newvalue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newvalue) => setIsLactoseFree(newvalue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newvalue) => setIsVegan(newvalue)}
      />
      <FilterSwitch
        label="Vegeterian"
        state={isVegetarian}
        onChange={(newvalue) => setIsVegetarian(newvalue)}
      />
    </View>
  );
};
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Screen",
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
