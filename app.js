const express = require('express');
const { indexRouter } = require('./routes/indexRouter')
const { newRouter } = require('./routes/newRouter')
const { detailsRouter } = require('./routes/detailsRouter')
const path = require("node:path");
require('dotenv').config()



const app = express()
const PORT = 3003

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)
app.use('/', newRouter)
app.use('/', detailsRouter)

app.get('/{*splat}', (req, res) => {
    res.send('404 page')
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`App is running successfully. on port ${PORT}`);
})