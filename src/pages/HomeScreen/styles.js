import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "#f1f1ee"
  },

  // Parte de Busca e header
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#364146",
    alignItems: "center",
    height: 80,
    justifyContent: "space-around"
  },

  search: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    fontSize: 20
  },

  searchBtn: {
    borderRadius: 50,
    backgroundColor: "#0097e6",
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },


  // Sem busca
  noSearchText: {
    fontSize: 30,
    color: "#999",
    alignSelf: "center",
    marginTop: 100,
    fontWeight: "bold"
  },


  // Repositório buscado
  containerRepo: {
    backgroundColor: "#FFF",
    width: "90%",
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },

  favoriteBtn: {
    position: "absolute",
    padding: 10,
    right: 0,
    top: 0
  },  
  
  titleRepo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },

  userInfo: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15
  },

  userImg: {
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 2
  },

  userName: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    lineHeight: 20,
    color: "#999",
    textAlign: "justify",
    paddingHorizontal: 5,
  },

  repoInfoContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },

  repoInfo: {
    flexDirection: "row"
  },

  repoInfoText: {
     color: "#777",
     marginHorizontal: 5
  },


  // Botão de ver mais
  seeMoreBtn: {
    marginTop: 30,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0097e6",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5
  },

  seeMoreBtnText: {
    color: "#FFF",
    marginLeft: 5,
    fontSize: 17,
    fontWeight: "bold"
  }
})