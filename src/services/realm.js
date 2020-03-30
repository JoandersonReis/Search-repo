import Realm from "realm"

import FavoriteSchema from "../schemas/FavoriteSchema"

export default function getRealm() {
  return Realm.open({
    schema: [FavoriteSchema]
  })
}
