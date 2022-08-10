const Engineer = require("../Assets/engineer");


test("Testing github link argument", () => {
    const testValue = "github";
    const emp = new Engineer("Azariah", 1234, "test@test.com", testValue);
    expect(emp.github).toBe(testValue);
  });
  
  test("Testing getRole()", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Azariah", 1234, "test@test.com", "github");
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Testing getGithub()", () => {
    const testValue = "github";
    const emp = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(emp.getGithub()).toBe(testValue);
  });