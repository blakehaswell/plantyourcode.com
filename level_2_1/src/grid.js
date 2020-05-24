module.exports = function (seeds, rows, cols) {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            grid[i][j] = seeds[(i * cols) + j];
        }
    }
    return grid;
};