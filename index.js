const dotenv = require("dotenv");

const express = require('express');

dotenv.config({ path: `./config.env` });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))

const app = express();

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    const path = require('path');

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname,'client','build')));
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(PORT, console.log("Server is running...."));