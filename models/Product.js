const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//clothes
const ProductSchema = new Schema({
    user: { //relationship between a product and user
        type: Schema.Types.ObjectId,
        ref: 'users'
    },//refers to users
    name: {
      type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },
    pic1: {
        type: String,
        required: true,
    },
    pic2: {
        type: String,
    },
    pic3: {
        type: String,
    },
    specs: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('product', ProductSchema);
