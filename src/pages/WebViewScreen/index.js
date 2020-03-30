import React from 'react'
import { WebView } from "react-native-webview"
import { useRoute } from "@react-navigation/native"


function WebViewScreen() {
  const route = useRoute()

  return <WebView source={{ uri: route.params.url }} />
}

export default WebViewScreen