const assert = require("assert").strict;
const grid = require("../src/grid");

describe("grid", () => {
    it("should return the smallest grid that will fit the given number of seeds", () => {
        assert.deepEqual(grid(0), [0, 0]);
        assert.deepEqual(grid(1), [1, 1]);
        assert.deepEqual(grid(2), [2, 1]);
    });
});