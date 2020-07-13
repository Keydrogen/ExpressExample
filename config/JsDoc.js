'use strict';


module.exports = {
  swaggerDefinition: {
    info: {
      title: "My sample NodeJS API",
      version: "1.0.0"
    },
    basePath: '/', // Base path (optional)
  },
  apis: ["app/routes.js"]
};
