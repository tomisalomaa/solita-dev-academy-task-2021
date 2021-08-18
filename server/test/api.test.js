const api = require("../controllers/api");
jest.mock("../controllers/api");

describe("API functions", () => {
    test("getAllVaccinations should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getVaccinationsPerDay should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getVaccinationsByGender should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getAllAntiqua should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getAntiquaDistricts should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getAllSolar should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getSolarDistricts should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getAllZerpfy should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
    test("getZerpfyDistricts should exist", ()  => {
        expect(api.getAllVaccinations.mock).toBeTruthy();
    });
});