const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/hameddb')

    .then(() => {

        console.log('Data base is connected')

    })

    .catch(err => {

        console.log(err)

    })