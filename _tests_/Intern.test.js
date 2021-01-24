const { expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("getSchool() returns intern's school", () => {
        expect(new Intern("Jim","45","jim@gmail.com","UC Berkeley").getSchool()).toBe("UC Berkeley");
    });

    it("getRole() returns 'Intern'", () => {
        expect(new Intern("Jim","45","jim@gmail.com","UC Berekely").getRole()).toBe("Intern");
    });
});