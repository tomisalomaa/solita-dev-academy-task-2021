const vaccination = require("../models/vaccination")

module.exports = class API {
    static async getAllVaccinations(req,res) {
        try {
            const vaccinations = await vaccination.vaccinationModel.find()
            res.status(200).json(vaccinations)
            console.log("Vaccination data fetch successful")
        } catch (e) {
            res.status(404).json({message: "Vaccinations data not found!"})
            console.log("Error while getting all vaccinations:", e)
        }
    }
    static async getAllAntiqua(req,res) {
        try {
            const antiquas = await vaccination.antiquaModel.find()
            res.status(200).json(antiquas)
            console.log("Antiqua data fetch successful")
        } catch (e) {
            res.status(404).json({message: "Antiqua data not found!"})
            console.log("Error while getting Antiqua data:", e)
        }
    }
    static async getAllSolar(req,res) {
        try {
            const solars = await vaccination.solarModel.find()
            res.status(200).json(solars)
            console.log("Solar Buddhica data fetch successful")
        } catch (e) {
            res.status(404).json({message: "Solar Buddhica data not found!"})
            console.log("Error while getting Solar Buddhica data:", e)
        }
    }
    static async getAllZerpfy(req,res) {
        try {
            const zerpfys = await vaccination.zerpfyModel.find()
            res.status(200).json(zerpfys)
            console.log("Zerpfy data fetch successful")
        } catch (e) {
            res.status(404).json({message: "Zerpfy data not found!"})
            console.log("Error while getting Zerpfy data:", e)
        }
    }
}