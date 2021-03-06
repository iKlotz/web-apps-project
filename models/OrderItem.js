const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema({
    user: { //relationship between a product and a user
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
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
    quantity:{
        type: Number,
        value: 1
    },
    status:{
      type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'orders'});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
