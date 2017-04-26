'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./Public'));

app.get('/', function(request,response){
  response.sendFile('Public/portfolio.html', {root: '.'});
});

app.post('/project_data', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function(){
  console.log(`server is running on port: ${PORT}`)
});
