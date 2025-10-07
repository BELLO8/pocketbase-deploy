/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813217691")

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
      "Audit technique complet",
      "Étude de faisabilité",
      "Recommandations personnalisées",
      "Sélection des équipements",
      "Planning de livraison",
      "Préparation de l'installation",
      "Sourcing international",
      "Contrôle qualité fabricant",
      "Logistique sécurisée",
      "Installation par techniciens certifiés",
      "Tests de conformité",
      "Réception officielle",
      "Formation des utilisateurs",
      "Formation des techniciens",
      "Documentation complète"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1813217691")

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
      "Audit technique complet",
      "Étude de faisabilité",
      "Recommandations personnalisées",
      "Sélection des équipements",
      "Planning de livraison",
      "Préparation de l'installation",
      "Sourcing international",
      "Contrôle qualité fabricant",
      "Logistique sécurisée",
      "Installation par techniciens certifiés",
      "Tests de conformité",
      "Réception officielle",
      "Formation des utilisateurs",
      "Formation des techniciens",
      "Documentation complète"
    ]
  }))

  return app.save(collection)
})
