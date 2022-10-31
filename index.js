// Set port
const port = 4000

// Express
const express = require('express');
const app = express();

const root = require('./routes/root');

app.use('/id', root);

//
app.listen(port, () => console.log(`Listening on port ${port}...`));
