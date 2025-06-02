const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `)
})

app.get('/about', (req, res) => {
  res.send(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About Us</h1>
                    <p>
                        About us: at CADT, we love node.js! 
                    </p>
                </body>
            </html>
        `)
})

app.get('/contact', (req, res) => {
  res.send(`
            <html>
                <head><title>Contact</title></head>
                <body>
                    <h1>Contact Us</h1>
                    <p>
                        You can reach us via email…
                    </p>
                </body>
            </html>
        `)
})

app.get('/products', (req, res) => {
    res.send(`
                <html>
                    <head><title>Products</title></head>
                    <body>
                        <h1>Our Products</h1>
                        <p>
                            Buy one get one… 
                        </p>
                    </body>
                </html>
            `)
})

app.get('/projects', (req, res) => {
    res.send(`
                <html>
                    <head><title>Projects</title></head>
                    <body>
                        <h1>Our Projects</h1>
                        <p>
                            We are working on some cool projects… 
                        </p>
                    </body>
                </html>
            `)
})

app.use((req, res) => {
  res.status(404).send(`
            <html>
                <head><title>404 Not Found</title></head>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </body>
            </html>
        `)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
