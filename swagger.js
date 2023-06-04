const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json'; // Caminho e nome do arquivo de saída JSON do Swagger
const endpointsFiles = ['./src/app']; // Array contendo os caminhos dos arquivos que contêm as rotas da API

swaggerAutogen(outputFile, endpointsFiles);