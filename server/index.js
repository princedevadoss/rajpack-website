
const express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let main = require('./main/api');
let port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist/rajpack-website')));

app.use('/app', main);

app.get('/*', function(req, res) {
    res.sendfile('../dist/rajpack-website/index.html')
});

// app.get('/boxapp', function(req, res) {
//   res.sendfile('./public/boxapp/index.html')
// });

app.listen(port, () => console.log(`Rajpack running on ${port}!`));

