const categoryPath = {
  "/calculate": {
    post: {
      tags: ["category"],
      summary: "Returns Health Risk",
      description: "Returns a Health Risk and Category",
      operationId: "getCalculatedCount",
      produces: ["application/json"],
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Created object",
          required: true,

          schema: {
            $ref: "#/definitions/Category",
          },
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/Category",
          },
        },
        404: {
          description: "Result not Found",
        },
        500: {
          description: "Server Error",
        },
        422: {
          description: "Validation Error",
        },
      },
    },
  },
  "/upload": {
    post: {
      summary: "Upload json file",
      consumes: "multipart/form-data",
      parameters: [
        {
          in: "formData",
          name: "upfile",
          type: "file",

          description: " The file to upload",
          required: true,

          schema: {
            $ref: "#/definitions/Category",
          },
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          schema: {
            $ref: "#/definitions/Category",
          },
        },
        404: {
          description: "Result not Found",
        },
        500: {
          description: "Server Error",
        },
        422: {
          description: "Validation Error",
        },
      },
    },
  },
};

module.exports = { categoryPath };
