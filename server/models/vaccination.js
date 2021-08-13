const mongoose = require("mongoose")

const vaccinationModel = mongoose.model(
    "vaccines",
    mongoose.Schema({
        "vaccination-id": String,
        sourceBottle: String,
        gender: String,
        vaccinationDate: String
    })
)
const antiquaModel = mongoose.model(
    "antiqua",
    mongoose.Schema({
        id: String,
        orderNumber: Number,
        responsiblePerson: String,
        healthCareDistrict: String,
        vaccine: String,
        injections: Number,
        arrived: String
    }),
    "antiqua"
)
const solarModel = mongoose.model(
    "solarbuddhica",
    mongoose.Schema({
        id: String,
        orderNumber: Number,
        responsiblePerson: String,
        healthCareDistrict: String,
        vaccine: String,
        injections: Number,
        arrived: String
    }),
    "solarbuddhica"
)
const zerpfyModel = mongoose.model(
    "zerpfy",
    mongoose.Schema({
        id: String,
        orderNumber: Number,
        responsiblePerson: String,
        healthCareDistrict: String,
        vaccine: String,
        injections: Number,
        arrived: String
    }),
    "zerpfy"
)

module.exports = { vaccinationModel, antiquaModel, solarModel, zerpfyModel }