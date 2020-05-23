module.exports = function (message) {
    return Array.from(message)
        .map(letter => {
            if (letter === "a" || letter === "A") {
                return letter + "tiva";
            } else if (letter === "e" || letter === "E") {
                return letter + "llia";
            } else if (letter === "i" || letter === "I") {
                return letter + "mus";
            } else if (letter === "o" || letter === "O") {
                return letter + "phylum";
            } else if (letter === "u" || letter === "U") {
                return letter + "rea";
            } else {
                return letter;
            }
        })
        .join("");
};