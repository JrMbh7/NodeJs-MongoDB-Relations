const express = require('express'); 
const mongoose = require('mongoose');
const FormationController = require('../Controller/FormationController');
const ParticipantController = require('../Controller/ParticipantController'); 

mongoose.connect("mongodb://127.0.0.1:27017/ANC", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connection to Database success !"))
    .catch(err => console.error("Connection error", err));

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server connect on port ${PORT}`);
}) 

ParticipantController.run();    