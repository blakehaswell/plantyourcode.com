const assert = require("assert").strict;
const grid = require("../src/grid");

describe("grid", () => {
    it("returns a 2D array with passed seeds in the given number of rows and columns, filling unused slots with undefined", () => {
        const seed1 = 1;
        const seed2 = 2;
        const seed3 = 3;
        const seed4 = 4;

        assert.deepEqual(grid([], 0, 0), []);
        assert.deepEqual(grid([], 1, 0), [[]]);

        assert.deepEqual(
            grid([seed1, seed2, seed3, seed4], 2, 2),
            [[seed1, seed2], [seed3, seed4]]
        );

        assert.deepEqual(
            grid([seed1, seed2, seed3, seed4], 2, 3),
            [[seed1, seed2, seed3], [seed4, undefined, undefined]]
        );
    });
});