const mongoose = require('mongoose');

const ParticipantSchema = mongoose.Schema

const participantSchema = new ParticipantSchema({
    nom: String,
    prenom:String,
    email: String,
    password: String,
    formations_Suivies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Formation"
        }
    ]
})

//Ajout d'un statut dans les formations suivies

const Participant = mongoose.model('Participant', participantSchema)

module.exports = Participant