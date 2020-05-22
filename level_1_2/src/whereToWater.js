module.exports = function (plantsArray) {
    return plantsArray
        .filter(plant => plant.needsWater)
        .map(plant => plant.gardenLocation);
};