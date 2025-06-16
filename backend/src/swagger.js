const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Feedback API',
            version: '1.0.0',
            description: 'API for handling customer feedback'
        },
        servers: [
            {
                url: 'http://localhost:3000/api/test'
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);
