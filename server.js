'use strict';

const express = require('express');
const sa = require('superagent');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.get('*', (request, response) => response.sendFile('portfolio.html', {root: './public'}));

app.get('/repos', (req, res) => {
  sa.get('https://api.github.com/users/LynnDC/repos')
    .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .end((err, repos) => {
      if(err) console.log(err);
      res.send(repos);
    })
});

app.post('/project_data', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
