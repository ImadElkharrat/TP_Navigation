import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default function Profil({ route, navigation }) {
    const { Color } = route.params;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Color }]}>Profil</Text>
      <Text style={[styles.subtitle, { color: Color }]}>Ceci est votre page de profil </Text>
      <Button
        title=" Retour à l’accueil"
        onPress={() => navigation.navigate("Accueil")}
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
