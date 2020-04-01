import React from 'react'
import { StatusBar, YellowBox } from "react-native"
import Routes from "./routes"

YellowBox.ignoreWarnings(["Error: java.lang.Boolean cannot be cast", "Error: java.lang.Double cannot"])

function App() {
  return (
    <>
      <StatusBar backgroundColor="#364146" barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App