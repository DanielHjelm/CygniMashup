// Set port to the port of the application or 4000
const port = process.env.PORT || 4000;

// Express
const express = require('express');
const app = express();

// Root route
const root = require('./routes/root');

// Use /id
app.use('/id', root);

//  Listen to port
app.listen(port, () => console.log(`Listening on port ${port}...`));
