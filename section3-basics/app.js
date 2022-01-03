const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

//sets up the local server port
//type in localhost:3000 to see the results after 
//opening terminal and typing node app.js
//make sure to end the server and save changes to restart with changes
server.listen(3000);