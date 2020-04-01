import React from 'react'
import { WebView } from "react-native-webview"
import { useRoute } from "@react-navigation/native"



function WebViewScreen() {
  const route = useRoute()
  const url = route.params.url
  
  return <WebView source={{ uri: url }} />
}

export default WebViewScreen