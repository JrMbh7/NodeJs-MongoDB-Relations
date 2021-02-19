const mongoose = require('mongoose');

const CategorieSchema = mongoose.Schema

const categorieSchema = new CategorieSchema({
    nom: String,
    formations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Formation"
        }
    ]
})

const Categorie = mongoose.model('Categorie', categorieSchema)

module.exports = Categorie