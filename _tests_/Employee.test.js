const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("getName() returns employee's name", () => {
        expect(new Employee("Jim","45","jim@gmail.com").getName()).toBe("Jim");
    });

    it("getID() returns employee's ID", () => {
        expect(new Employee("Jim","45","jim@gmail.com").getID()).toBe("45");
    });

    it("getEmail() returns employee's email", () => {
        expect(new Employee("Jim","45","jim@gmail.com").getEmail()).toBe("jim@gmail.com");
    });

    it("getRole() returns 'Employee'", () => {
        expect(new Employee("Jim","45","jim@gmail.com").getRole()).toBe("Employee");
    });
});