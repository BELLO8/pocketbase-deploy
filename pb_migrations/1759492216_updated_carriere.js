/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3151120381")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select3632233996",
    "maxSelect": 1,
    "name": "test",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "eeeeee",
      "dedqd",
      "fqfqfqsdfqs",
      "fqfqsfqsfsq"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3151120381")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select3632233996",
    "maxSelect": 1,
    "name": "test",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "eeeeee"
    ]
  }))

  return app.save(collection)
})
