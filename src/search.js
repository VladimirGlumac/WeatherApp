import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const WeatherSearch = ({ fetchWeatheData }) => {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search City"
        placeholderTextColor="white"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons
        name="search"
        size={28}
        color="white"
        onPress={() => fetchWeatheData(cityName)}
      />
    </View>
  );
};
export default WeatherSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: "white",
    backgroundColor: "transparent",
  },
});
