const { expect, it } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("Manager has officeNumber property and is stored correctly", () => {
        expect(new Manager("Jim","45","jim@gmail.com","5").officeNumber).toEqual("5");
    });

    it("getRole() returns 'Manager'", () => {
        expect(new Manager("Jim","45","jim@gmail.com","5").getRole()).toBe("Manager");
    });
});