import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import OctIcons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"

import styles from "./styles"

import getRealm from "../../services/realm"

function FavoritesScreen() {
  const [favorites, setFavorites] = useState([])
  const navigation = useNavigation()


  async function loadFavorites() {
    const realm = await getRealm()

    const data = realm.objects("Favorites")
    let arr = Array.from(data)
    
    setFavorites(arr)
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  async function handleDeleteFavorite(id) {
    const realm = await getRealm()

    realm.write(() => {
      let favorite = realm.objects("Favorites").filtered(`id=${id}`)
      
      realm.delete(favorite)
    })

    loadFavorites()
  }

  function renderItem({ item }) {
    return (
      <View style={styles.containerRepo}>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteFavorite(item.id) }>
          <Feather name="x" size={20} color="#999" />
        </TouchableOpacity>
        <Text style={styles.titleRepo}>{item.repoName}</Text>
        <View style={styles.userInfo}>
          <Image
            style = {styles.userImg} 
            source={{
              uri: item.avatarUrl,
              width: 35,
              height: 35
            }}
          />

          <Text style={styles.userName}>{item.username}</Text>
        </View>
        
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.repoInfoContainer}>
          <View style={styles.repoInfo}>
            <OctIcons style={styles.icon} name="star" size={20} color="#000" /> 
            <Text style={styles.repoInfoText}>{item.stars}</Text>
          </View>
          <View style={styles.repoInfo}>
            <OctIcons style={styles.icon} name="repo-forked" size={20} color="#000" /> 
            <Text style={styles.repoInfoText}>{item.forks}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.seeMoreBtn} 
          onPress={() => {
            navigation.navigate("WebView", { url: item.repoUrl })
          }}
        >
          <Feather name="log-out" size={20} color="#FFF" />
          <Text style={styles.seeMoreBtnText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="github" size={50} color="#FFF" />
        <Text style={styles.headerTitle}>Favoritos</Text>
      </View>

      <FlatList 
        data={favorites}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.refreshBtn}
        onPress={() => loadFavorites()}
      ><Feather name="refresh-ccw" size={25} color="#FFF" /></TouchableOpacity>
    </View>
  )
}

export default FavoritesScreen