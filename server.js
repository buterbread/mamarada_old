const express = require('express');

const PORT = 80;

const app = express();

app.use('/static', express.static('./static'));
app.use('/', express.static('dist'));
app.use('/*', express.static('dist'));

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
