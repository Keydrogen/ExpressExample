const express = require('express');
const chalk = require('chalk');
const PORT = 8080;
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

require('./app/routes.js')(app);

app.listen(PORT,(req, res) =>{console.log(chalk.green("Server listening on "+ PORT))})