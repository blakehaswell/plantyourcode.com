module.exports = function (seedCount) {
    const x = Math.ceil(Math.sqrt(seedCount));
    const y = Math.round(Math.sqrt(seedCount));
    return [x, y];
};