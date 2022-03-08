const express = require('express')
const bodyParser = require('body-parser');
const { Port } = require('./config.json').app
const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// additional  functions
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session)

// session
app.use(cookieParser("some secret word"));
app.use(session({
    secret: "some secret word",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({ path: __dirname + './session-store' }),
    cookie: { maxAge: 12*3600000, secure: false, httpOnly: false }
}))

// file upload
app.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 },
}));

// use app
app.use('/', require('./app/app'))

app.listen(Port, ()=>{
    console.log(`Server started => \nhttp://localhost:${Port}`)
})