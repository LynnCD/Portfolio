'use strict';
// get: is to get the thing thats already exsit, if no data exist yet, retrieve nothing.
//post: create a resoure in server and send new data to the data base.
//put: update exsiting entry in the existing data base, it can only update things thats already exsit. can be used without 'get' if you konw the exact ID.
//delete: removes an existing entry from the database.

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('*', (request, response) => response.sendFile('portfolio.html', {root: './public'}));

app.post('/project_data', bodyParser, (request, response)=>
  {console.log(request.body);
  response.send('Record posted to server!!');})

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
