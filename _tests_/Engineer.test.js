const { expect, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("getGithub() returns engineer's github", () => {
        expect(new Engineer("Jim","45","jim@gmail.com","github.com/jim").getGithub()).toBe("github.com/jim");
    });

    it("getRole() returns 'Engineer'", () => {
        expect(new Engineer("Jim","45","jim@gmail.com","github.com/jim").getRole()).toBe("Engineer");
    });
});