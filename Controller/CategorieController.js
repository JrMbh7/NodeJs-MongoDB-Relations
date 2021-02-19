const Categorie = require('../Models/Categorie');

const createCategorie = function(categorie) {
    return Categorie.create(categorie).then(categorieDoc => {
        console.log("Categorie created ! ");
        return categorieDoc;
    })
};

module.exports = {createCategorie};