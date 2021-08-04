const { convertbmi, convertHeight, checkRiskFactor } = require("../utils");

describe("checking convertHeight", () => {
  it("should return the  height as 1.71", () => {
    const result = convertHeight(171);
    expect(result).toBe(1.71);
  });

  it("should return the height as 1.61", () => {
    const result = convertHeight(161);
    expect(result).toBe(1.61);
  });

  it("should return the height as 1.8", () => {
    const result = convertHeight(180);
    expect(result).toBe(1.8);
  });

  it("should return height as 1.66", () => {
    const result = convertHeight(166);
    expect(result).toBe(1.66);
  });

  it("should return height as 0", () => {
    const result = convertHeight(0);
    expect(result).toBe(0);
  });

  it("should return height as 0 when no value is passed", () => {
    const result = convertHeight();
    expect(result).toBe(0);
  });

  it("should return height as 12.44 when number is passed as string", () => {
    const result = convertHeight("124");
    expect(result).toBe(1.24);
  });

  it("should return height as 0 when string is passed", () => {
    const result = convertHeight("abcd");
    expect(result).toBe(0);
  });
});

describe("checking convertbmi", () => {
  it("should the return the bmi value as 22.50", () => {
    const result = convertbmi(175, 75);
    expect(result).toBe(24.49);
  });

  it("should the return the bmi value as 29.4", () => {
    const result = convertbmi(167, 82);
    expect(result).toBe(29.4);
  });

  it("should the return the bmi value as 0 when height is 0", () => {
    const result = convertbmi(0, 82);
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when weight is 0", () => {
    const result = convertbmi(172, 0);
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when weight is 0 and height is 0", () => {
    const result = convertbmi(0, 0);
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when empty value is passed", () => {
    const result = convertbmi();
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when empty value is passed", () => {
    const result = convertbmi(1);
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when string is passed", () => {
    const result = convertbmi("xxx", 9);
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when string is passed", () => {
    const result = convertbmi("xxx", "xxxx");
    expect(result).toBe(0);
  });

  it("should the return the bmi value as 0 when string is passed", () => {
    const result = convertbmi("172", "55");
    expect(result).toBe(18.59);
  });
});

describe("checkRiskFactor", () => {
  it("should retun health risk factor as Malnutrition risk when bmi is 18", () => {
    const result = checkRiskFactor(18);
    expect(result).toEqual({
      "BMI Category": "Underweight",
      "Health Risk": "Malnutrition risk",
      BMI: 18,
    });
  });
  it("should retun health risk factor as Low risk when bmi is 23", () => {
    const result = checkRiskFactor(23);
    expect(result).toEqual({
      "BMI Category": "Normal weight",
      "Health Risk": "Low risk",
      BMI: 23,
    });
  });
  it("should retun empty object", () => {
    const result = checkRiskFactor();
    expect(result).toEqual({});
  });
  it("should retun empty object when string is passed", () => {
    const result = checkRiskFactor("abcd");
    expect(result).toEqual({});
  });
  it("should retun value", () => {
    const result = checkRiskFactor("12");
    expect(result).toEqual({
      "BMI Category": "Underweight",
      "Health Risk": "Malnutrition risk",
      BMI: 12,
    });
  });
});
