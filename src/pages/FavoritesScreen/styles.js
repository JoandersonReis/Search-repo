import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1ee"
  },

  // Header da aplicação
  header: {
    backgroundColor: "#364146",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 70
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
    marginRight: 40
  },


  // Exibição do Repositório
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

  deleteBtn: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 10
  },  
  
  titleRepo: {
    fontSize: 40,
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


  // Bot~]ao de ver mais
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
  },


  // Botão de Refresh
  refreshBtn: {
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: "#0097e6",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    right: 10
  }
})