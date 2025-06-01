const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>About Us</h1>
                <p>About us: at CADT, we love Node.js!</p>
            </body>
        </html>
    `);
});

app.get('/contact-us', (req, res) => {
    res.send(`
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>Contact Us</h1>
                <p>You can reach us via email…</p>
            </body>
        </html>
    `);
});

app.get('/products', (req, res) => {
    res.send(`
        <html>
            <head><title>Products</title></head>
            <body>
                <h1>Our Products</h1>
                <p>Buy one, get one…</p>
            </body>
        </html>
    `);
});

app.get('/projects', (req, res) => {
    res.send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Our Projects</h1>
                <p>Here are our awesome projects</p>
            </body>
        </html>
    `);
});
app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.status(404).send('404 Not Found');
  } else {
    res.status(405).send('Method Not Allowed');
  }
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
