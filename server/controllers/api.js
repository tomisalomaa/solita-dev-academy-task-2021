const vaccination = require("../models/vaccination")

module.exports = class API {
    static async getAllVaccinations(req,res) {
        try {
            const vaccinations = await vaccination.vaccinationModel.find()
            res.status(200).json(vaccinations)
        } catch (e) {
            res.status(404).json({message: "Vaccinations data not found!"})
            console.log("Error while getting all vaccinations:", e)
        }
    }
    
    static async getVaccinationsPerDay(req,res) {
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
            res.status(404).json({message: "Vaccinations data not found!"})
            console.log("Error while aggregating daily vaccinations:", e)
        }
    }

    static async getVaccinationsByGender(req,res) {
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
          res.status(404).json({message: "Vaccinations data not found!"})
          console.log("Error while aggregating daily vaccinations:", e)
      }
  }

    static async getAllAntiqua(req,res) {
        try {
            const antiquas = await vaccination.antiquaModel.find()
            res.status(200).json(antiquas)
        } catch (e) {
            res.status(404).json({message: "Antiqua data not found!"})
            console.log("Error while getting Antiqua data:", e)
        }
    }

    static async getAntiquaDistricts(req,res) {
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
          res.status(404).json({message: "Antiqua district data not found!"})
          console.log("Error while getting Antiqua district data:", e)
      }
    }

    static async getAllSolar(req,res) {
        try {
            const solars = await vaccination.solarModel.find()
            res.status(200).json(solars)
        } catch (e) {
            res.status(404).json({message: "Solar Buddhica data not found!"})
            console.log("Error while getting Solar Buddhica data:", e)
        }
    }

    static async getSolarDistricts(req,res) {
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
          res.status(404).json({message: "Solarbuddhica district data not found!"})
          console.log("Error while getting Solarbuddhica district data:", e)
      }
    }

    static async getAllZerpfy(req,res) {
        try {
            const zerpfys = await vaccination.zerpfyModel.find()
            res.status(200).json(zerpfys)
        } catch (e) {
            res.status(404).json({message: "Zerpfy data not found!"})
            console.log("Error while getting Zerpfy data:", e)
        }
    }

    static async getZerpfyDistricts(req,res) {
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
          res.status(404).json({message: "Zerpfy district data not found!"})
          console.log("Error while getting Zerpfy district data:", e)
      }
    }
}