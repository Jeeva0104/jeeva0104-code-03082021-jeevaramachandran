const SUCCESS = 200;
const SERVER_ERROR = 500;

const BMI_RANGE = {
  VERY_LOW: {
    min: 18.4,
    bmi_category: "Underweight",
    health_risk: "Malnutrition risk",
  },
  LOW: {
    min: 18.5,
    max: 24.9,
    bmi_category: "Normal weight",
    health_risk: "Low risk",
  },
  VERY_MEDIUM: {
    min: 25,
    max: 29.9,
    bmi_category: "Overweight",
    health_risk: "Enhanced risk",
  },
  MEDIUM: {
    min: 30,
    max: 34.9,
    bmi_category: "Moderately obese",
    health_risk: "Medium risk",
  },
  HIGH: {
    min: 35,
    max: 39.9,
    bmi_category: "Severely obese",
    health_risk: "High risk",
  },
  VERY_HIGH: {
    min: 40,
    bmi_category: "Very severely obese",
    health_risk: "Very high risk",
  },
};
module.exports = {
  SUCCESS,
  SERVER_ERROR,
  BMI_RANGE,
};
