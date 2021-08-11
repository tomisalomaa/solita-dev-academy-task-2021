const express = require("express")
const router = express.Router()
const API = require("../controllers/api.js")

router.get("/vaccinations", API.getAllVaccinations)
router.get("/daily-vaccinations", API.getVaccinationsPerDay)
router.get("/vaccinations-gender", API.getVaccinationsByGender)
router.get("/antiqua", API.getAllAntiqua)
router.get("/solar", API.getAllSolar)
router.get("/zerpfy", API.getAllZerpfy)

module.exports = router