const { convertbmi, convertHeight, checkRiskFactor } = require("../utils");

describe("checking convertHeight", () => {
  it("should return the converted height", () => {
    const result = convertHeight(171);
    console.log(result);
    expect(result).toBe(1.71);
  });
  it("should return the converted height", () => {
    const result = convertHeight(161);
    console.log(result);
    expect(result).toBe(1.61);
  });
  it("should return the converted height", () => {
    const result = convertHeight(180);
    console.log(result);
    expect(result).toBe(1.8);
  });
  it("should return the converted height", () => {
    const result = convertHeight(166);
    console.log(result);
    expect(result).toBe(1.66);
  });
});
