const { isNumber } = require("lodash");
const { BMI_RANGE } = require("./constant");

const convertbmi = (height = 0, weight = 0) => {
  if (
    height <= 0 ||
    weight <= 0 ||
    isNaN(parseInt(height)) ||
    isNaN(parseInt(weight)) ||
    !isNumber(parseInt(height)) ||
    !isNumber(parseInt(weight))
  )
    return 0;
  height = convertHeight(height, weight);
  if (height <= 0) return 0;
  const result = parseInt(weight) / (height * height);
  return parseFloat(result.toFixed(2));
};

const convertHeight = (height = 0) => {
  if (height <= 0 || isNaN(parseInt(height)) || !isNumber(parseInt(height)))
    return 0;
  return parseFloat(height) / 100;
};

const checkRiskFactor = (bmi = 0) => {
  let obj = {};
  if (bmi <= 0 || isNaN(parseFloat(bmi)) || !isNumber(parseFloat(bmi)))
    return {};
  switch (true) {
    case bmi <= BMI_RANGE.VERY_LOW.min:
      obj["BMI Category"] = BMI_RANGE.VERY_LOW.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_LOW.health_risk;
      obj["BMI"] = parseFloat(bmi);
      break;
    case bmi >= BMI_RANGE.LOW.min && bmi <= BMI_RANGE.LOW.max:
      obj["BMI Category"] = BMI_RANGE.LOW.bmi_category;
      obj["Health Risk"] = BMI_RANGE.LOW.health_risk;
      obj["BMI"] = parseFloat(bmi);
      break;
    case bmi >= BMI_RANGE.VERY_MEDIUM.min && bmi <= BMI_RANGE.VERY_MEDIUM.max:
      obj["BMI Category"] = BMI_RANGE.VERY_MEDIUM.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_MEDIUM.health_risk;
      obj["BMI"] = parseFloat(bmi);

      break;
    case bmi >= BMI_RANGE.MEDIUM.min && bmi <= BMI_RANGE.MEDIUM.max:
      obj["BMI Category"] = BMI_RANGE.MEDIUM.bmi_category;
      obj["Health Risk"] = BMI_RANGE.MEDIUM.health_risk;
      obj["BMI"] = parseFloat(bmi);
      break;
    case bmi >= BMI_RANGE.HIGH.min && bmi <= BMI_RANGE.HIGH.max:
      obj["BMI Category"] = BMI_RANGE.HIGH.bmi_category;
      obj["Health Risk"] = BMI_RANGE.HIGH.health_risk;
      obj["BMI"] = parseFloat(bmi);
      break;
    case bmi >= BMI_RANGE.VERY_HIGH.min:
      obj["BMI Category"] = BMI_RANGE.VERY_HIGH.bmi_category;
      obj["Health Risk"] = BMI_RANGE.VERY_HIGH.health_risk;
      obj["BMI"] = parseFloat(bmi);
      break;
  }
  return obj;
};

module.exports = {
  convertbmi,
  convertHeight,
  checkRiskFactor,
};
