const mongoose = require('mongoose');
const FormateurSchema = mongoose.Schema

const formateurSchema = new FormateurSchema({
    user_id: Number,
    nbre_Formations: Number,
    note: Number,
    nbre_Avis: Number,
    nbre_Total_Participants: Number,
    formations: []
})

const Formateur = mongoose.model('Formateur', formateurSchema)

module.exports = Formateur