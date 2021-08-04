const { convertbmi, checkRiskFactor } = require("../helper/utils");
const calculateBMI = (req) => {
  try {
    let data = req.body || [];
    const result = [];
    const invalid = [];
    data.forEach((element) => {
      let value = {};
      const { HeightCm = "", WeightKg = "" } = element;
      const bmi = convertbmi(HeightCm, WeightKg);
      if (bmi <= 0) return invalid.push(element);
      value = { ...element, ...checkRiskFactor(bmi) };
      result.push(value);
    });

    return { result: { calculated: result, invalid: invalid } };
  } catch (e) {
    throw e;
  }
};
module.exports = {
  calculateBMI,
};
