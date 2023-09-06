import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Constants } from "expo-constants";
import React, { useState, useEffect } from "react";
import WeatherInfo from "./Weatherinfo";

const API_KEYS = "0a74c57a0331533ce9eb5120a71636fb";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchWeatheData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`
      );
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchWeatheData("Zrenjanin");
  }, []);

  //If teh details are not loaded
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Text>City not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weather Forecast</Text>
        </View>
        <WeatherInfo
          weatherData={weatherData}
          fetchWeatheData={fetchWeatheData}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
