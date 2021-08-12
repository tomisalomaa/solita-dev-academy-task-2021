const express = require("express")
const router = express.Router()
const API = require("../controllers/api.js")

router.get("/vaccinations", API.getAllVaccinations)
router.get("/daily-vaccinations", API.getVaccinationsPerDay)
router.get("/vaccinations-gender", API.getVaccinationsByGender)
router.get("/antiqua", API.getAllAntiqua)
router.get("/antiqua-districts", API.getAntiquaDistricts)
router.get("/solar", API.getAllSolar)
router.get("/solar-districts", API.getSolarDistricts)
router.get("/zerpfy", API.getAllZerpfy)
router.get("/zerpfy-districts", API.getZerpfyDistricts)

module.exports = router