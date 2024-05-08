const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/log', (req, res) => {
    console.log(req.body.message);  // Output the log to the console
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

