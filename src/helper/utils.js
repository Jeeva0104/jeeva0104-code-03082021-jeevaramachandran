const { BMI_RANGE } = require("./constant");

const convertbmi = (height, weight) => {
  if (height <= 0 || weight <= 0) return 0;
  height = convertHeight(height, weight);
  const result = weight / (height * height);
  return result.toFixed(2);
};

const convertHeight = (height) => {
  return height / 100;
};

const checkRiskFactor = (bmi) => {
  let obj = {};
  switch (true) {
    case bmi <= BMI_RANGE.VERY_LOW.min:
      obj["BMI Category"] = BMI_RANGE.VERY_LOW.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_LOW.health_risk;
      obj["BMI"] = bmi;
      break;
    case bmi >= BMI_RANGE.LOW.min && bmi <= BMI_RANGE.LOW.max:
      obj["BMI Category"] = BMI_RANGE.LOW.bmi_category;
      obj["Health Risk"] = BMI_RANGE.LOW.health_risk;
      obj["BMI"] = bmi;
      break;
    case bmi >= BMI_RANGE.VERY_MEDIUM.min && bmi <= BMI_RANGE.VERY_MEDIUM.max:
      obj["BMI Category"] = BMI_RANGE.VERY_MEDIUM.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_MEDIUM.health_risk;
      obj["BMI"] = bmi;

      break;
    case bmi >= BMI_RANGE.MEDIUM.min && bmi <= BMI_RANGE.MEDIUM.max:
      obj["BMI Category"] = BMI_RANGE.MEDIUM.bmi_category;
      obj["Health Risk"] = BMI_RANGE.MEDIUM.health_risk;
      obj["BMI"] = bmi;
      break;
    case bmi >= BMI_RANGE.HIGH.min && bmi <= BMI_RANGE.HIGH.max:
      obj["BMI Category"] = BMI_RANGE.HIGH.bmi_category;
      obj["Health Risk"] = BMI_RANGE.HIGH.health_risk;
      obj["BMI"] = bmi;
      break;
    case bmi >= BMI_RANGE.VERY_HIGH.min:
      obj["BMI Category"] = BMI_RANGE.VERY_HIGH.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_HIGH.health_risk;
      obj["BMI"] = bmi;
      break;
  }
  return obj;
};

module.exports = {
  convertbmi,
  convertHeight,
  checkRiskFactor,
};
