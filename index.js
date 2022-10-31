// Set port
const port = 3000

// Import express and set app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World From Express');
});

//
app.listen(port, () => console.log(`Listening on port ${port}...`));
