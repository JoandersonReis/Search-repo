import React, { useState, useEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from "../HomeScreen/styles"

import getRealm from "../../services/realm"

import Feather from "react-native-vector-icons/Feather"
import OctIcons from "react-native-vector-icons/Octicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"


function RenderRepo({ info, username }) {
  const navigation = useNavigation()
  const [starColor, setStarColor] = useState("#ddd")

  useEffect(() => {
    async function changeStarColor() {
      const realm = await getRealm()

      const repoId = info.id

      const favorite = realm.objects("Favorites").filtered(`id = ${repoId}`)

      if(favorite.length == 1) {
        setStarColor("#fff200")
      } else {
        setStarColor("#ddd")
      }
    }

    if(info != "") {
      changeStarColor()
    }
  }, [username])

  async function handleAddFavorite() {
    const realm = await getRealm()

    const data = {
      id: info.id,
      repoName: info.name,
      repoUrl: info.svn_url,
      avatarUrl: info.owner.avatar_url,
      username,
      description: info.description,
      stars: info.stargazers_count,
      forks: info.forks
    }

    realm.write(() => {
      realm.create("Favorites", data, "modified")
    })

    setStarColor("#fff200")
  }

  if(info == "") {
    return <Text style={styles.noSearchText}>Busque um repositorio</Text>
  } else {
    return (
      <View style={styles.containerRepo}>
        <TouchableOpacity style={styles.favoriteBtn} onPress={handleAddFavorite}>
          <FontAwesome name="star" size={20} color={starColor} />
        </TouchableOpacity>
        <Text style={styles.titleRepo}>{info.name}</Text>
        <View style={styles.userInfo}>
          <Image
            style = {styles.userImg}
            source={{
              uri: info.owner.avatar_url,
              width: 35,
              height: 35
            }}
          />

          <Text style={styles.userName}>{username}</Text>
        </View>
        
        <Text style={styles.description}>{info.description}</Text>

        <View style={styles.repoInfoContainer}>
          <View style={styles.repoInfo}>
            <OctIcons style={styles.icon} name="star" size={20} color="#000" /> 
            <Text style={styles.repoInfoText}>{info.stargazers_count}</Text>
          </View>
          <View style={styles.repoInfo}>
            <OctIcons style={styles.icon} name="repo-forked" size={20} color="#000" /> 
            <Text style={styles.repoInfoText}>{info.forks}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.seeMoreBtn} 
          onPress={() => {
            navigation.navigate("WebView", { url: info.svn_url })
          }}
        >
          <Feather name="log-out" size={20} color="#FFF" />
          <Text style={styles.seeMoreBtnText}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default RenderRepo