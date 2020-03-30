import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Feather from "react-native-vector-icons/Feather"

import styles from "./styles"

import api from "../../services/api"

import RenderRepo from "../components/RenderRepo"

function HomeScreen() {
  const [info, setInfo] = useState("")
  const [repo, setRepo] = useState("")
  const [userName, setUserName] = useState("")

  const [bdColor, setBdColor] = useState("transparent")

  async function saveUserName(username) {
    const response = await api.get(`users/${username}`)

    setUserName(response.data.name)
  }

  async function handleSearchRepo() {
    try {
      const response = await api.get(`repos/${repo}`)
  
      saveUserName(response.data.owner.login)
  
      setInfo(response.data)

      setRepo("")
    } catch(err) {
      setBdColor("#ff3838")
    }
  } 

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          defaultValue={repo}
          style={[styles.search, {borderWidth: 1, borderColor: bdColor}]}
          onChangeText={text => {
            setRepo(text)
            setBdColor("transparent")
          }}  
          placeholder = "Ex: Usuário/Repositório"
        />

        <TouchableOpacity
          style={styles.searchBtn}
          onPress = {handleSearchRepo}
        ><Feather name="search" size={30} color="#FFF" /></TouchableOpacity>
      </View>

      <RenderRepo info={info} username={userName} />
    </View>
  )
}

export default HomeScreen