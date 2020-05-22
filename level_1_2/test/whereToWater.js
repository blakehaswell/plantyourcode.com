const assert = require("assert").strict;
const whereToWater = require("../src/whereToWater");

describe("whereToWater", () => {
    it("should return an empty array when passed an empty array", () => {
        assert.deepEqual(whereToWater([]), []);
    });

    it("should return an array of locations which need watering", () => {
        const plant1 = {
            gardenLocation: [1, 1],
            needsWater: true
        };
        const plant2 = {
            gardenLocation: [1, 2],
            needsWater: false
        };
        const plant3 = {
            gardenLocation: [2, 1],
            needsWater: false
        };
        const plant4 = {
            gardenLocation: [2, 2],
            needsWater: true
        };
        assert.deepEqual(whereToWater([plant1, plant2, plant3, plant4]), [[1, 1], [2, 2]]);
    });
});