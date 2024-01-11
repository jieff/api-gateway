require('dotenv').config();
const express = require('express');
const { userServiceProxy, authServiceProxy } = require('./middleware/proxyConfig');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs'); // Certifique-se de que o YAML foi importado corretamente e o arquivo swagger.yaml existe

const app = express();
const port = process.env.PORT || 4000;

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Defina um novo router para as rotas do Swagger UI
const router = express.Router();

// Aplicar o Swagger UI na rota '/docs'
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));

// Use o router para as rotas do Swagger UI
app.use('/', router);

// Defina as rotas para os serviços proxy
app.use('/administrator', userServiceProxy);
app.use('/employee', userServiceProxy);
app.use('/enterprise', userServiceProxy);
app.use('/auth', authServiceProxy);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} via HTTP`);
});
