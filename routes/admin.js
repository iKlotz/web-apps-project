const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator/check');
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const CartItem = require('../models/CartItem');
const OrderItem = require('../models/OrderItem');
const User = require('../models/User');

// @route    GET admin/users
// @desc     Get all users
// @access   Public

//add middleware
router.get('/users', [auth.authMiddleware, auth.adminMiddleware], async (req, res) => {
    try {
        //this line sorts by user ID, add auth before async to use it
        // const products = await Product.find({ user: req.user.id }).sort({
        const users = await User.find().sort({
            date: -1
        });

        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET api/admin
// @desc     Get specific users shopping-cart content
// @access   Private
router.get('/users/:id', async (req, res) => {
    try {
        let items = await CartItem.find({user: req.params.id}).sort({
            date: -1
        });

        if (!items) return res.status(404).json({msg: 'Users cart is empty'});

        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    GET api/admin
// @desc     Get specific users orders
// @access   Private
router.get('/users/orders/:id', async (req, res) => {
    try {
        let items = await OrderItem.find({user: req.params.id}).sort({
            date: -1
        });

        if (!items) return res.status(404).json({msg: 'There are no orders'});

        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    PUT api/products/:id
// @desc     Update a product
// @access   Private
router.put('/:id', [auth.authMiddleware, auth.adminMiddleware], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});

    const {model, type, brand, specs, price, pic1, pic2, pic3} = req.body;

    // Build product object
    const productFields = {};
    if (model) productFields.name = model;
    if (type) productFields.type = type;
    if (brand) productFields.brand = brand;
    if (specs) productFields.specs = specs;
    if (price) productFields.price = price;
    if (pic1) productFields.pic1 = pic1;
    if (pic2) productFields.pic2 = pic2;
    if (pic3) productFields.pic3 = pic3;

    try {
        let product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({msg: 'Product not found'});

        // Make sure user owns product
        // if (product.user.toString() !== req.user.id)
        //     return res.status(401).json({msg: 'Not authorized'});

        product = await Product.findByIdAndUpdate(
            req.params.id,
            {$set: productFields},
            {new: true}
        );

        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error put');
    }
});


// // @route    DELETE api/products/:id
// // @desc     Delete a contact
// // @access   Private
router.delete('/:id', [auth.adminMiddleware, auth.adminMiddleware], async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({msg: 'Product not found'});

        // Make sure user owns product
        // if (product.user.toString() !== req.user.id)
        //     return res.status(401).json({msg: 'Not authorized'});
        //
        // await Product.findByIdAndRemove(req.params.id);

        res.json({msg: 'Product removed'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;
