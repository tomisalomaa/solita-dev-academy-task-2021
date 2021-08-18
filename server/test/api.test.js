const api = require("../controllers/api");
jest.mock("../controllers/api");

/*
*   Currently only checks for existance of api functions.
*   First function has a fishbone core set for TDD to be
*   implemented for other functions as well.
*/

describe("getAllVaccinations", () => {
    test("should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    // });
    // test("should return data as json if status 200", async () => {
    //     //test
    // });
    // test("should return an error message as json if status 404 or 500", async () => {
    //     // test
    // });
    });
});

describe("API functions", () => {
    test("getVaccinationsPerDay should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getVaccinationsByGender should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getAllAntiqua should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getAntiquaDistricts should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getAllSolar should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getSolarDistricts should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getAllZerpfy should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
    test("getZerpfyDistricts should exist", ()  => {
        expect(api.getAllVaccinations).toBeTruthy();
    });
});