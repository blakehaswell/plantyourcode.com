const assert = require("assert").strict;
const translatePlantLatin = require("../src/translatePlantLatin");

describe("translatePlantLatin", () => {
    it("should return an empty string when passed an empty string", () => {
        assert.equal(translatePlantLatin(""), "");
    });

    it("should not convert consonants", () => {
        assert.equal(translatePlantLatin("b"), "b");
    });

    it("should not convert symbols", () => {
        assert.equal(translatePlantLatin("!"), "!");
    });

    it("should convert lowercase vowels", () => {
        assert.equal(translatePlantLatin("a"), "ativa");
        assert.equal(translatePlantLatin("e"), "ellia");
        assert.equal(translatePlantLatin("i"), "imus");
        assert.equal(translatePlantLatin("o"), "ophylum");
        assert.equal(translatePlantLatin("u"), "urea");
    });

    it("should convert uppercase vowels", () => {
        assert.equal(translatePlantLatin("A"), "Ativa");
        assert.equal(translatePlantLatin("E"), "Ellia");
        assert.equal(translatePlantLatin("I"), "Imus");
        assert.equal(translatePlantLatin("O"), "Ophylum");
        assert.equal(translatePlantLatin("U"), "Urea");
    });

    it("should convert vowels in a multi-character string", () => {
        assert.equal(
            translatePlantLatin("I love water!"),
            "Imus lophylumvellia wativatelliar!"
        );
    })
});