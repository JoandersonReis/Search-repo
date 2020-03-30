export default class FavoriteSchema {
  static schema = {
    name: "Favorites",
    primaryKey: "id",
    properties: {
      id: { type: "int", indexed: true },
      repoName: "string",
      repoUrl: "string",
      avatarUrl: "string",
      username: "string",
      description: "string",
      stars: "int",
      forks: "int"
    }
  }
}