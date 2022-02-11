const mongoose = require('mongoose');

const mySchema = mongoose.Schema;

const objectSchema = new mySchema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        minlength: 5
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('objectSchema', objectSchema);