const vaccination = require("../models/mongooseModels")

module.exports = class API {
    /*
    getAllVaccinations fetches all the documents from a MongoDB collection
    that holds the vaccinations.source data.
    A single element returned includes attributes:
      - _id (database entry id of the element)
      - vaccination-id
      - sourceBottle
      - gender
      - VaccinationDate (note: VERY exact ISO-format)
    */
    static async getAllVaccinations(req, res) {
        try {
            const vaccinations = await vaccination.vaccinationModel.find()
            res.status(200).json(vaccinations)
        } catch (e) {
            res.status(404).json({ message: "Vaccinations data not found!" })
            console.log("Error while getting all vaccinations:", e)
        }
    }
    /*
    getVaccinationsPerDay aggregates documents from the vaccinations.source
    collection of MongoDB. It reduces the HH:MM:SS part from the date attributes
    and groups the documents to query the amount of vaccinations per day.
    Returns the following attributes for an element:
      - _id: date in YYYY-MM-DD format
      - vaccinationsPerDay: amount of vaccinations when collection documents
                            are grouped by the reformatted date.
    */
    static async getVaccinationsPerDay(req, res) {
        try {
            const vaccinationsPerDay = await vaccination.vaccinationModel.aggregate([
                {
                    '$project': {
                        'yearMonthDay': {
                            '$substr': [
                                '$vaccinationDate', 0, 10
                            ]
                        }
                    }
                }, {
                    '$group': {
                        '_id': '$yearMonthDay',
                        'vaccinationsPerDay': {
                            '$sum': 1
                        }
                    }
                }, {
                    '$sort': {
                        '_id': 1
                    }
                }
            ])
            res.status(200).json(vaccinationsPerDay)
        } catch (e) {
            res.status(404).json({ message: "Vaccinations data not found!" })
            console.log("Error while aggregating daily vaccinations:", e)
        }
    }
    /*
    getVaccinationsByGender aggregates the vaccinations.source collection of the database
    to group by gender and then return the sum of documents by gender.
    A returning element contains attributes:
      - _id: gender
      - amountVaccinatedByGender: grouped sum of a given gender
    */
    static async getVaccinationsByGender(req, res) {
        try {
            const vaccinationsPerDay = await vaccination.vaccinationModel.aggregate([
                {
                    '$group': {
                        '_id': '$gender',
                        'amountVaccinatedByGender': {
                            '$sum': 1
                        }
                    }
                }
            ])
            res.status(200).json(vaccinationsPerDay)
        } catch (e) {
            res.status(404).json({ message: "Vaccinations data not found!" })
            console.log("Error while aggregating daily vaccinations:", e)
        }
    }
    /*
    getAllAntiqua query returns all the documents from the antiqua.source collection of the database.
    A single element has the following attributes:
      - _id (database entry id of the element)
      - id
      - orderNumber
      - responsiblePerson
      - healthCareDistrict
      - vaccine
      - injections
      - arrived
    */
    static async getAllAntiqua(req, res) {
        try {
            const antiquas = await vaccination.antiquaModel.find()
            res.status(200).json(antiquas)
        } catch (e) {
            res.status(404).json({ message: "Antiqua data not found!" })
            console.log("Error while getting Antiqua data:", e)
        }
    }
    /*
    getAntiquaDistricts aggregates the antiqua collection to group the orders by healthcare district.
    A single element has the attributes:
      - _id: healthcare district
      - ordersByDistrict: a grouped sum of documents for the district
    */
    static async getAntiquaDistricts(req, res) {
        try {
            const districtInfo = await vaccination.antiquaModel.aggregate([
                {
                    '$group': {
                        '_id': '$healthCareDistrict',
                        'ordersByDistrict': {
                            '$sum': 1
                        }
                    }
                }
            ])
            res.status(200).json(districtInfo)
        } catch (e) {
            res.status(404).json({ message: "Antiqua district data not found!" })
            console.log("Error while getting Antiqua district data:", e)
        }
    }
    /*
    For getAllSolar see getAllAntiqua. Does the same for solarbuddhica collection.
    */
    static async getAllSolar(req, res) {
        try {
            const solars = await vaccination.solarModel.find()
            res.status(200).json(solars)
        } catch (e) {
            res.status(404).json({ message: "Solar Buddhica data not found!" })
            console.log("Error while getting Solar Buddhica data:", e)
        }
    }
    /*
    For getSolarDistricts see getAntiquaDistricts. Does the same for solarbuddhica collection.
    */
    static async getSolarDistricts(req, res) {
        try {
            const districtInfo = await vaccination.solarModel.aggregate([
                {
                    '$group': {
                        '_id': '$healthCareDistrict',
                        'ordersByDistrict': {
                            '$sum': 1
                        }
                    }
                }
            ])
            res.status(200).json(districtInfo)
        } catch (e) {
            res.status(404).json({ message: "Solarbuddhica district data not found!" })
            console.log("Error while getting Solarbuddhica district data:", e)
        }
    }
    /*
    For getAllZerpfy see getAllAntiqua. Does the same for zerpfy collection.
    */
    static async getAllZerpfy(req, res) {
        try {
            const zerpfys = await vaccination.zerpfyModel.find()
            res.status(200).json(zerpfys)
        } catch (e) {
            res.status(404).json({ message: "Zerpfy data not found!" })
            console.log("Error while getting Zerpfy data:", e)
        }
    }
    /*
    For getZerpfyDistricts see getAntiquaDistricts. Does the same for zerpfy collection.
    */
    static async getZerpfyDistricts(req, res) {
        try {
            const districtInfo = await vaccination.solarModel.aggregate([
                {
                    '$group': {
                        '_id': '$healthCareDistrict',
                        'ordersByDistrict': {
                            '$sum': 1
                        }
                    }
                }
            ])
            res.status(200).json(districtInfo)
        } catch (e) {
            res.status(404).json({ message: "Zerpfy district data not found!" })
            console.log("Error while getting Zerpfy district data:", e)
        }
    }
}