const express = require('express')
const fs = require('fs')
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

app.get('/contact', (req, res) => {
    res.send(`
        <form method="POST" action="/contact">
          <input type="text" name="name" placeholder="Your name" />
          <button type="submit">Submit</button>
        </form>
    `);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.post('/contact', (req, res) => {
    const name = req.body.name
    if(!name || name.trim() === '') {
        res.status(400).send('<h2>Name is required!</h2><a href="/contact">Go Back</a>')
        return
    }

    console.log(`Received name: ${name}`)

    fs.appendFile('Submissions.txt', `Name: ${name}\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err)
            res.status(500).send('Internal Server Error')
            return
        }

        res.send(`
            <html>
                <head><title>Submission Successful</title></head>
                <body>
                    <h1>Thank you, ${name}!</h1>
                    <p>Your submission has been received.</p>
                    <a href="/contact">Submit Another</a>
                </body>
            </html>
        `)
    })
});

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