'use strict';
// get: is to get the thing thats already exsit, if no data exist yet, retrieve nothing.
//post: create a resoure in server and send new data to the data base.
//put: update exsiting entry in the existing data base, it can only update things thats already exsit. can be used without 'get' if you konw the exact ID.
//delete: removes an existing entry from the database.

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));

app.get('/', function(request,response){
  response.sendFile('public/portfolio.html', {root: '.'});
});

app.post('/project_data', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, function(){
  console.log(`server is running on port:${PORT}`)
});
