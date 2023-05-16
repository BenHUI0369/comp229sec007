//Namespace in C# / Java
const express = require('express');
const motgan = require('morgan');

//App Object
const app = express();

app.get('/', (req, res) => {
    res.json({message: "First Blog"})
});

//start Server
app.listen(8081);
