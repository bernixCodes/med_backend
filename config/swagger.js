const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MedTrack CRUD REST API",
      version: "1.0.0",
      contact: {
        name: "Bernie",
        url: "https://github.com/bernixCodes",
        email: "bernyx.owusu@gmail.com",
      },
      description:
        "This API allows CRUD operations for managing drugs and labs, implemented with Express and documented using Swagger.",
    },
    servers: [
      {
        url: "http://localhost:5001/api",
        description: "Development server",
      },
      {
        url: "https://medtrack-restapi.onrender.com/api",
        description: "Production server",
      },
    ],
    tags: [
      {
        name: "Drugs",
        description: "Endpoints for managing drugs",
      },
      {
        name: "Labs",
        description: "Endpoints for managing labs",
      },
    ],
    paths: {
      "/drugs": {
        get: {
          summary: "Retrieve all drugss",
          tags: ["Drugs"],
          responses: {
            200: {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Drug" },
                  },
                },
              },
            },
          },
        },

        post: {
          summary: "Add a new drug",
          tags: ["Drugs"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Drug",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Drug created successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
            403: {
              description: "Already exists - add a different item",
            },
          },
        },
      },
      "/drugs/{id}": {
        put: {
          summary: "Update a drug",
          tags: ["Drugs"],
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the drug to update",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Drug",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Drug updated successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
          },
        },

        delete: {
          summary: "Delete a drug",
          tags: ["Drugs"],
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the drug to delete",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],

          responses: {
            201: {
              description: "Drug deleted successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
          },
        },
      },

      "/labs": {
        get: {
          summary: "Retrieve all labs",
          tags: ["Labs"],
          responses: {
            200: {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/Lab" },
                  },
                },
              },
            },
          },
        },

        post: {
          summary: "Add a new lab",
          tags: ["Labs"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Lab",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Lab created successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
            403: {
              description: "Already exists - add a different item",
            },
          },
        },
      },

      "/labs/{id}": {
        put: {
          summary: "Update a Lab",
          tags: ["Labs"],
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the lab to update",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Lab",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Lab updated successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
          },
        },

        delete: {
          summary: "Delete a lab",
          tags: ["Labs"],
          parameters: [
            {
              name: "id",
              in: "path",
              description: "ID of the lab to delete",
              required: true,
              schema: {
                type: "string",
              },
            },
          ],

          responses: {
            201: {
              description: "Lab deleted successfully",
            },
            400: {
              description: "Bad request - ensure correct data provided",
            },
          },
        },
      },
    },

    components: {
      schemas: {
        Drug: {
          type: "object",
          required: [
            "drugName",
            "description",
            "unitPrice",
            "drugCode",
            "drugPrice",
          ],
          properties: {
            drugName: {
              type: "string",
              description: "The name of the drug",
            },
            description: {
              type: "string",
              description: "The description of the drug",
            },
            unitPrice: {
              type: "string",
              description: "The unit pricing of the drug",
            },
            drugCode: {
              type: "string",
              description: "The code of the drug",
            },
            drugPrice: {
              type: "integer",
              description: "The price of the drug",
            },
          },
        },

        Lab: {
          type: "object",
          required: ["labName", "labType", "labCode", "labPrice"],
          properties: {
            labName: {
              type: "string",
              description: "The name of the lab",
            },
            labType: {
              type: "string",
              description: "The type of lab - either Radiology or Laboratory",
            },
            mainCategory: {
              type: "string",
              description: "The main category of the lab",
            },
            subCategory: {
              type: "string",
              description: "The sub category of the lab",
            },
            labCode: {
              type: "string",
              description: "The lab code ",
            },
            labPrice: {
              type: "integer",
              description: "The lab price ",
            },
          },
        },
      },
      responses: {
        400: {
          description: "Bad request - make sure you provide the correct data",
          contents: "application/json",
        },
        403: {
          description: "Already exists - add a different item",
          contents: "application/json",
        },
        201: {
          description: "Added Successfully",
          contents: "application/json",
        },
        200: {
          description: "Successful Operation",
          contents: "application/json",
        },
      },
    },
  },
  apis: ["../routes/drugRoutes.js", "../routes/labRoutes.js"],
};

module.exports = options;
