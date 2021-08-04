const category = {
  type: "array",
  items: {
    type: "object",
    properties: {
      Gender: {
        type: "string",
      },
      HeightCm: {
        type: "number",
      },
      WeightKg: {
        type: "number",
      },
    },
  },
};

module.exports = { category };
