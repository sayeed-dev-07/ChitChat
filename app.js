const express = require('express');

const path = require("node:path");



const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const app = express()
const PORT = 3003

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get('/', (req, res) => {
    res.render('index', { messages })
})

app.get('/{*splat}', (req, res) => {
    res.send('404 page')
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`App is running successfully. on port ${PORT}`);
})