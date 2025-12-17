import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Parametres() {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Paramètres</Text>
 <Text>Page accessible via le menu latéral (Drawer).</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 }
});
