require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;


// Carregar o certificado SSL e a chave privada
const privateKey = fs.readFileSync('/etc/letsencrypt/live/dlist.com.br/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/dlist.com.br/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Verifica se o envio do endereço do serviço de privacidade está configurado
if (!process.env.URL_BASE) {
  console.error('Please provide the PRIVACY environment variable.');
  process.exit(1);
}

// Cria um proxy para o serviço de privacidade usando o http-proxy-middleware
const privacyServiceProxy = createProxyMiddleware({
  target: process.env.URL_BASE, // Usa o endereço definido no .env para o serviço de privacidade
  changeOrigin: true, // Altera o cabeçalho Host para o URL de destino
});

// Criar servidor HTTPS
const httpsServer = https.createServer(credentials, app);

// Rota para redirecionar para o serviço de privacidade
app.get('/privacy', (req, res, next) => privacyServiceProxy(req, res, next));

app.get('/delete-account', (req, res, next) => privacyServiceProxy(req, res, next));

app.get('/', (req, res) => res.send('Hello Gateway API!!!!'));

httpsServer.listen(port, () => {
    console.log(`Example app listening on port ${port} via HTTPS`);
});

