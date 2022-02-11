const express = require('express');
const router = require('./router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(express.static('public'))

app.set('view engine', 'ejs');

require('./mongoose');

app.listen(1465, () => console.log('port 1465 is starting ...'));