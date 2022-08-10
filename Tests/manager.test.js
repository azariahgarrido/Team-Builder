const Manager = require("../Assets/manager");


test("Testing office number", () => {
    const testValue = 100;
    const emp = new Manager("Azariah", 1234, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
  });
  
  test("Testing getRole()", () => {
    const testValue = "Manager";
    const emp = new Manager("Azariah", 1234, "test@test.com", 100);
    expect(emp.getRole()).toBe(testValue);
  });
  
  test("Testing getOffice()", () => {
    const testValue = 100;
    const emp = new Manager("Azariah", 1234, "test@test.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
  });