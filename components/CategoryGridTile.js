import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.text} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 13,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});
export default CategoryGridTile;
