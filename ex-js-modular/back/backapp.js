const express = require('express');
const app = express();
const port = 81;

app.get("/birth", (req,res) => {
    const branchMod = require('./modules/birth');
    branchMod(req,res);
});

app.get("/sector", (req,res) => {
    const branchMod = require('./modules/sector');
    branchMod(req,res);
});

app.get("/branch", (req,res) => {
    const branchMod = require('./modules/branch');
    branchMod(req,res);
});



app.listen(port, () => { console.log(`back app listening on localhost:${port}`); });