'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  console.log(`token: ${process.env.GITHUB_TOKEN}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}


app.get('/skills', (request, response) => response.sendFile('portfolio.html', {root: './public'}));
app.get('/github/*', proxyGitHub);
app.get('*', (request, response) => response.sendFile('portfolio.html', {root: './public'}));

app.post('/project_data', bodyParser, (request, response)=>
  {console.log(request.body);
  response.send('Record posted to server!!');})

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
