import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <Weather />
      <StatusBar style="auto" animated={true} backgroundColor="#e7eaf6" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
