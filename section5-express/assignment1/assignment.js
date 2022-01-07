const express = require('express');
const app = express();

// app.use((req, res, next) =>{
//     console.log('logging thing 1 to the console!');
//     next();
// });
// app.use((req, res, next) =>{
//     console.log('logging thing 2 to the console!');
//     res.send('<h1>Returning one Response using the send method instead of what we used before!</h1>');
// });
app.use( '/users', (req, res, next) => {
    console.log('add a users middleware');
    res.send('<h1>Returning a users middleware</h1>');
});
app.use( '/', (req, res, next) => {
    console.log('middleware that just does the slash');
    res.send('<h1>Returning a Slash middleware</h1>');
});

app.listen(3000);