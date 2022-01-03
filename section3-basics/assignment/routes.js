//to work with the file system
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Username</title></head>');
    res.write('<body>');
    res.write('<h1>Please Enter a User Name:</h1>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="user-name"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User List</title></head>');
    res.write('<body>');
    res.write('<h1>Users</h1>')
    res.write('<ul><li>Stephanie Tanner</li><li>Joshua Tanner</li></ul>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST'){
      const body = [];
      req.on('data', (chunk) =>{
          console.log(chunk);
          body.push(chunk);
      });
      return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const userName = parsedBody.split('=')[1];
          //writeFileSync will block the process until this code is executed
          fs.writeFile('create-user.txt', userName, (err) =>{
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
      });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Welcome to my First Assignment</title></head>');
  res.write('<body><h1>Hello First Assignment User!</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;