const Intern = require("../Assets/intern");


test("Testing school argument", () => {
    const testValue = "Tucson High";
    const emp = new Intern("Azariah", 1234, "test@test.com", testValue);
    expect(emp.school).toBe(testValue);
  });
  
  test("Testing getRole()", () => {
    const testValue = "Intern";
    const emp = new Intern("Azariah", 1234, "test@test.com", "Tucson High");
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Testing getSchool()", () => {
    const testValue = "Tucson High";
    const emp = new Intern("Azariah", 1234, "test@test.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
  });