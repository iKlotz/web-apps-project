const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    user: { //relationship between a product and user
        type: Schema.Types.ObjectId,
        ref: 'users'
    },//refers to users
    model: {
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
        type: Number,
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
    quantity: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('product', ProductSchema);
