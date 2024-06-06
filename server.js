const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const logs = []; // Array to store log messages

// Setup CORS to allow all origins
app.use(cors({
  origin: '*' // Allow CORS from any origin
}));

app.use(bodyParser.json());

app.post('/log', (req, res) => {
    const logEntry = `${new Date().toISOString()} - ${req.body.message.type} - ${req.body.message.content}`;
    logs.push(logEntry); // Add the log entry to the array
    console.log(logEntry); // Also log to the console for debugging
    res.status(204).send();
});

// Endpoint to view logs in a simple HTML
app.get('/view-logs', (req, res) => {
    res.send(`<html><body><h1>Log Entries</h1><pre>${logs.join('\n')}</pre></body></html>`);
});

// Handle OPTIONS for preflight
app.options('*', cors());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});