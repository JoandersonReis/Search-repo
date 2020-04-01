import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Text, AsyncStorage } from "react-native"

const Drawer = createDrawerNavigator()

import HomeScreen from "./pages/HomeScreen"
import FavoritesScreen from "./pages/FavoritesScreen"
import WebViewScreen from "./pages/WebViewScreen"

export default function Routes() {
  const drawerBarStyle = {
    style: {
      backgroundColor: "#364146"
    },
    activeBackgroundColor: "#999",
    activeTintColor: "#FFF",
    inactiveTintColor: "#FFF",
    labelStyle: {
      fontWeight: "bold",
    }
  } 

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContentOptions={drawerBarStyle}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{title: "Buscar"}} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{title: "Favoritos"}} />
        <Drawer.Screen 
          name="WebView" 
          component={WebViewScreen} 
          options={{
            drawerLabel: (focused, color) => {
              return <Text style={{display: "none"}}></Text>
            }
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

