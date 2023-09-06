import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import WeatherSearch from "./search";

export default function WeatherInfo({ weatherData, fetchWeatheData }) {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
      <WeatherSearch fetchWeatheData={fetchWeatheData} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.largeIcon}
          source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        />
        <Text style={styles.currentTemp}>{temp}°C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require("../assets/temp.png")}
          />
          <Text style={styles.infoText}>{feels_like}°C</Text>
          <Text style={styles.infoText}>Feels Like</Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIconHumidity}
            source={require("../assets/humidity.png")}
          />
          <Text style={styles.infoText}>{humidity}%</Text>
          <Text style={styles.infoText}>Humidity</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require("../assets/visibility.png")}
          />
          <Text style={styles.infoText}>{visibility}</Text>
          <Text style={styles.infoText}>Visibility</Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIconHumidity}
            source={require("../assets/windspeed.png")}
          />
          <Text style={styles.infoText}>{speed}m/s</Text>
          <Text style={styles.infoText}>Wind Speed</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallIcon}
            source={require("../assets/sunrise.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunrise * 1000).toLocaleString()}
          </Text>
          <Text style={styles.infoText}>Sunrise</Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallIconHumidity}
            source={require("../assets/sunset.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunset * 1000).toLocaleString()}
          </Text>
          <Text style={styles.infoText}>Sunset</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 120,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  extraInfo: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  info: {
    width: Dimensions.get("screen").width / 2.7,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    elevation: 10,
  },
  smallIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 45,
  },
  smallIconHumidity: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 45,
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
  },
});
