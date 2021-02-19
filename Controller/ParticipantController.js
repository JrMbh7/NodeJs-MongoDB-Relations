const Participant = require('../Models/Participant');
const FormationController = require('../Controller/FormationController');
const Formation = require('../Models/Formation');
const CategorieController = require('../Controller/CategorieController');
const Categorie = require('../Models/Categorie')

//Exemple concret d'une relation de Many-To-Many


const saveParticipant = function(participant) {
    return Participant.create(participant).then(Participant_Doc => {
        console.log("Participant Created ! ", Participant_Doc);
        return Participant_Doc;
    });
};

const addFormationToParticipant = function(participant_ID, formation) {
    return Participant.findByIdAndUpdate(
        participant_ID,
        { $push: { formations: formation._id} },
        { new: true, useFindAndModify: false }
    )
}

const addParticipantToFormation = function(formation_ID, participant) {
    return Formation.findByIdAndUpdate(
        formation_ID,
        { $push: { participants: participant._id} },
        { new: true, useFindAndModify: false }
    )
}

const run = async function() {

    var format = await FormationController.createFormation({
        Titre: "JavaScript & TypeScript",
        Image: "",
        compétence_Formateur: 15,
        evaluation: 4.2,
        nbre_Avis: 05,
        nbre_Participants: 15,
        date_MAJ: Date.now(),
        langue: "Français",
        nombre_heure: "15",
        desription: "ce cours vise à vous donner les bases et pré-requis en Js et Ts",
        cout_Formation: 185.50,
        monnaie: "XAF",
        contenu: "kjjDJLQJSLDJQjjmljqdsjklsmjdlcklxclkjckjlcjkxlcjcjxcxwl,vclcjxwlc",
        programme: "1. Introduction \n 2. Notions de front end et de back end",
        commentaire: "qdfjbq"
    });

    var part1 = await saveParticipant({
        nom: "Mbah II",
        prenom: "Junior Ulrich",
        email: "mbahjunior8@gmail.com",
        password: "Mojavveli*8"
    });

    var part2 = await saveParticipant({
        nom: "Amina",
        prenom: "Wassile",
        email: "moduulric@gmail.com",
        password: "AminWASve*8"
    });

    var part3 = await saveParticipant({
        nom: "Tatchum Meli",
        prenom: "Randell",
        email: "melirandell@gmail.com",
        password: "Mojavveli*8"
    });

    var formation = await addParticipantToFormation(format._id, part1);
    console.log("Formation : ", formation);

    var participant = await addFormationToParticipant(part1._id, format);
    console.log("Participant 1 :", participant);

    formation = await addParticipantToFormation(format._id, part2);
    console.log("Formation : ", formation);

    formation = await addParticipantToFormation(format._id, part3);
    console.log("Formation : ", formation);   

   
}

module.exports = {run};