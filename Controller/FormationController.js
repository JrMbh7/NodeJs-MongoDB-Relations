const Formation = require('../Models/Formation')
const Categorie = require('../Models/Categorie');
const Participant = require('../Models/Participant');
const Formateur = require('../Models/Formateur');
const CategorieController = require('../Controller/CategorieController');

const createFormation = function (formation) {
    return Formation.create(formation)
        .then(formationDoc => {
            console.log('\n Formation créée : ', formationDoc);
            return formationDoc;
        })
}

const run = async function () {
    //Representation d'une relation de One-To-many entre Categorie et Formation
    var categorie = await CategorieController.createCategorie({
        nom: "Programmation Web"  
    });

    categorie = await createFormation(categorie._id, {
        Titre: "JavaScript & TypeScript",
        Image: "",
        Formateur: "Junior M.",
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

    console.log("Categorie : ", categorie);

    categorie = await createFormation(categorie._id, {
        Titre: "Back end: Node Js",
        Image: "",
        Formateur: "Junior M.",
        compétence_Formateur: 15,
        evaluation: 3.8,
        nbre_Avis: 18,
        nbre_Participants: 185,
        date_MAJ: Date.now(),
        langue: "Français",
        nombre_heure: "195",
        desription: "ce cours vous présente de façon générale le développement d'applications web avec les frameworks ang et spb",
        cout_Formation: 165.00,
        monnaie: "XAF",
        contenu: "kjjDJLQJSLDJQjjmljqdsjklsmjdlcklxclkjckjlcjkxlcjcjxcxwl,vclcjxwlc",
        programme: "1. Introduction \n 2. Notions de front end et de back end",
        commentaire: "qdfjbq"
    });

    console.log("Categorie : ", categorie);
}

module.exports = {run, createFormation};