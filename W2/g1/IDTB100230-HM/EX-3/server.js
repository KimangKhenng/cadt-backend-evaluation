const express = require('express');
const fs = require('fs')

const app = express()

//middleware for parse form data
app.use(express.urlencoded({extended: true}))

//middleware for logging
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); 
});

app.get('/', (req,res) => {
    res.send('Welcome to the Home Page')
})

app.get('/contact', (req,res) => {
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `)
})

app.post('/contact', (req,res) => {
    const name = req.body.name
    console.log(`Received contact name: ${name}`)

    fs.appendFile('submissions.txt', name + '\n', err => {
        if(err) {
            return res.status(500).send('Server error: Unable to save your submission.')
        }
        res.send(`
            <h1>Thank You ${name}</h1>  
            <p>Your submission was saved.</p>  
        `)
    })
})


app.use((req,res) => {
    res.status(404).send('404 not found!')
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
