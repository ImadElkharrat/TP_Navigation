import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import Login from './screens/Login';
import Accueil from './screens/Accueil';
import Details from './screens/Details';
import Profil from './screens/Profil';
import Parametres from './screens/Parametres';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
/* ----------------------------------------------
 Onglets : Accueil + Profil
------------------------------------------------- */
function Tabs({ navigation }) {
 return (
 <Tab.Navigator
 screenOptions={{
 headerLeft: () => (
 <Button title="☰" onPress={() => navigation.openDrawer()} />
 )
 }}
 >
 <Tab.Screen name="Accueil" component={Accueil} />
 <Tab.Screen name="Profil" component={Profil} />
 <Tab.Screen name="Details" component={Details} />
 </Tab.Navigator>
 );
}
/* ----------------------------------------------
 Menu latéral
------------------------------------------------- */
function MenuPrincipal({ onLogout }) {
 return (
 <Drawer.Navigator>
  <Drawer.Screen name="Onglets" component={Tabs} />
  <Drawer.Screen name="Paramètres" component={Parametres} />
  <Drawer.Screen name="Se déconnecter">
   {(props) => <Logout {...props} onLogout={onLogout} />}
  </Drawer.Screen>
 </Drawer.Navigator>
 );
}
/* ----------------------------------------------
 Navigation principale
------------------------------------------------- */
export default function App() {
 const [isLogged, setIsLogged] = React.useState(false);
 return (
 <NavigationContainer>
 <Stack.Navigator screenOptions={{ headerShown: false }}>
 {!isLogged ? (
 <Stack.Screen name="Login">
 {(props) => (
 <Login {...props} onLogin={() => setIsLogged(true)} />
 )}
 </Stack.Screen>
 ) : (
 <Stack.Screen name="Application">
 {(props) => (
  <MenuPrincipal {...props} onLogout={() => setIsLogged(false)} />
 )}
 </Stack.Screen>
 )}
 </Stack.Navigator>
 </NavigationContainer>
 );
}

function Logout({ navigation, onLogout }) {
 return (
  <Button
    title="Se déconnecter"
    onPress={() => {
     onLogout();
     navigation.closeDrawer();
    }}
  />
 );
}