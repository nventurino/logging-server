const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Setup CORS
app.use(cors({
  origin: 'https://talkplayground-frontend-56cfac714117.herokuapp.com/' // Adjust this to match your frontend URL
}));

app.use(bodyParser.json());

app.post('/log', (req, res) => {
    console.log(req.body.message);  // Output the log to the console
    res.status(204).send();
});

// Handle OPTIONS for preflight
app.options('*', cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
