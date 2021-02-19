const mongoose = require('mongoose');

const FormationSchema = mongoose.Schema

const formationSchema = new FormationSchema({
    Titre: String,
    Image: String,
    Formateur: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Formateur"
        }
    ],
    compétence_Formateur: Number,
    evaluation: Number,
    nbre_Avis: Number,
    nbre_Participants:Number,
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Participant"
        }
    ],
    date_MAJ: Date,
    langue: String,
    nombre_heure: Number,
    desription: String,
    cout_Formation: Number,
    monnaie: String,
    contenu: String,
    programme: String,
    commentaire: String
})

const Formation = mongoose.model('Formation', formationSchema)

module.exports = Formation