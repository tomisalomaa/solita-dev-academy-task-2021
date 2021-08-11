import axios from "axios"

const url = "/api"

export default class API {
    static async getAllVaccinations() {
        const res = await axios.get(url+"/vaccinations")
        return res.data
    }
    static async getVaccinationsPerDay() {
        const res = await axios.get(url+"/daily-vaccinations")
        return res.data
    }
    static async getVaccinationsByGender() {
        const res = await axios.get(url+"/vaccinations-gender")
        return res.data
    }
    static async getAllAntiquas() {
        const res = await axios.get(url+"/antiqua")
        return res.data
    }
    static async getAllSolarbuddhicas() {
        const res = await axios.get(url+"/solar")
        return res.data
    }
    static async getAllZerpfys() {
        const res = await axios.get(url+"/zerpfy")
        return res.data
    }
}