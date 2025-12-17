import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default function Profil({ navigation, route }) {
  const { Color } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Color }]}>Bienvenue sur l'écran details</Text>
      <Text style={[styles.text, { color: Color }]}>
        Appuyez sur le bouton pour aller au profil.
      </Text>
      <Button
        title="Aller au Profil"
        onPress={() => navigation.navigate("Profil", { Color: "#6c57b9ff" })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffbe7",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
});
