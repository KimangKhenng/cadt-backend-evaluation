// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// GET Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// GET Contact Form
app.get('/contact', (req, res) => {
    res.send(`
      <form method="POST" action="/contact">
        <input type="text" name="name" placeholder="Your name" required />
        <button type="submit">Submit</button>
      </form>
    `);
});

// POST Contact Form
app.post('/contact', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send('Name is required.');
    }

    console.log(`Received contact form submission: ${name}`);

    // Append name to submissions.txt
    const filePath = path.join(__dirname, 'submissions.txt');
    fs.appendFile(filePath, `${name}\n`, err => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Internal Server Error');
        }

        res.send(`<h2>Thank you, ${name}!</h2><p>Your submission was received.</p>`);
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
