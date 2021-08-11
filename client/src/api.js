import axios from "axios"

const url = "/api"

export default class API {
    static async getAllVaccinations() {
        const res = await axios.get(url+"/vaccinations")
        console.log(res)
        return res.data
    }
    static async getAllAntiquas() {
        const res = await axios.get(url+"/antiqua")
        console.log(res)
        return res.data
    }
    static async getAllSolarbuddhicas() {
        const res = await axios.get(url+"/solar")
        console.log(res)
        return res.data
    }
    static async getAllZerpfys() {
        const res = await axios.get(url+"/zerpfy")
        console.log(res)
        return res.data
    }
}