const schemas = require("../models/mongooseModels");

describe("Vaccination schema attributes should match database document attributes", () => {
    test("'vaccination-id' matches", () => {
        expect(schemas.vaccinationModel.schema.paths.["vaccination-id"]).toBeDefined();
    });
    test("'sourceBottle' matches", () => {
        expect(schemas.vaccinationModel.schema.paths.sourceBottle).toBeDefined();
    });
    test("'gender' matches", () => {
        expect(schemas.vaccinationModel.schema.paths.gender).toBeDefined();
    });
    test("'vaccinationDate' matches", () => {
        expect(schemas.vaccinationModel.schema.paths.vaccinationDate).toBeDefined();
    });
});

describe("Antiqua schema attributes should match database document attributes", () => {
    test("'orderNumber' matches", () => {
        expect(schemas.antiquaModel.schema.paths.orderNumber).toBeDefined();
    });
    test("'responsiblePerson' matches", () => {
        expect(schemas.antiquaModel.schema.paths.responsiblePerson).toBeDefined();
    });
    test("'healthCareDistrict' matches", () => {
        expect(schemas.antiquaModel.schema.paths.healthCareDistrict).toBeDefined();
    });
    test("'vaccine' matches", () => {
        expect(schemas.antiquaModel.schema.paths.vaccine).toBeDefined();
    });
    test("'injections' matches", () => {
        expect(schemas.antiquaModel.schema.paths.injections).toBeDefined();
    });
    test("'arrived' matches", () => {
        expect(schemas.antiquaModel.schema.paths.arrived).toBeDefined();
    });
});

describe("Solarbuddhica schema attributes should match database document attributes", () => {
    test("'orderNumber' matches", () => {
        expect(schemas.solarModel.schema.paths.orderNumber).toBeDefined();
    });
    test("'responsiblePerson' matches", () => {
        expect(schemas.solarModel.schema.paths.responsiblePerson).toBeDefined();
    });
    test("'healthCareDistrict' matches", () => {
        expect(schemas.solarModel.schema.paths.healthCareDistrict).toBeDefined();
    });
    test("'vaccine' matches", () => {
        expect(schemas.solarModel.schema.paths.vaccine).toBeDefined();
    });
    test("'injections' matches", () => {
        expect(schemas.solarModel.schema.paths.injections).toBeDefined();
    });
    test("'arrived' matches", () => {
        expect(schemas.solarModel.schema.paths.arrived).toBeDefined();
    });
});

describe("Zerpfy schema attributes should match database document attributes", () => {
    test("'orderNumber' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.orderNumber).toBeDefined();
    });
    test("'responsiblePerson' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.responsiblePerson).toBeDefined();
    });
    test("'healthCareDistrict' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.healthCareDistrict).toBeDefined();
    });
    test("'vaccine' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.vaccine).toBeDefined();
    });
    test("'injections' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.injections).toBeDefined();
    });
    test("'arrived' matches", () => {
        expect(schemas.zerpfyModel.schema.paths.arrived).toBeDefined();
    });
});