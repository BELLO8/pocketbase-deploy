/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3776899405",
    "maxSelect": 4,
    "name": "items",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Matériels de physique-chimie",
      "Équipements de sciences naturelles",
      "Instruments de mathématiques",
      "Matériels d'expérimentation",
      "Équipements d'électronique",
      "Matériels de mécanique",
      "Outils de génie civil",
      "Instruments de mesure",
      "Équipements de recherche",
      "Matériels de TP avancés",
      "Instruments de précision",
      "Systèmes automatisés"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select3776899405",
    "maxSelect": 2,
    "name": "items",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Matériels de physique-chimie",
      "Équipements de sciences naturelles",
      "Instruments de mathématiques",
      "Matériels d'expérimentation",
      "Équipements d'électronique",
      "Matériels de mécanique",
      "Outils de génie civil",
      "Instruments de mesure",
      "Équipements de recherche",
      "Matériels de TP avancés",
      "Instruments de précision",
      "Systèmes automatisés"
    ]
  }))

  return app.save(collection)
})
