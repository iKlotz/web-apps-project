const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const auth = require('../middleware/auth');
const OrderItem = require('../models/OrderItem');
const User = require('../models/User');

// @route    GET api/orders
// @desc     Get all users orders
// @access   Private
router.get('/', auth.authMiddleware, async (req, res) => {
    try {
        //this line sorts by user ID, add auth before async to use it
        const products = await OrderItem.find({ user: req.user.id }).sort({
            // const products = await CartItem.find().sort({
            date: -1
        });

        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route    GET api/orders single item
// @desc     Get product from users wish list
// @access   Private
router.get('/:id', async (req, res) => {
    try {
        let product = await OrderItem.findById(req.params.id);

        if (!product) return res.status(404).json({msg: 'Product not found'});

        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route    POST api/orders
// @desc     Add new order
// @access   Private
router.post(
    '/',
    [
        auth.authMiddleware,
        [
            check('model', 'Model is required')
                .not()
                .isEmpty(),
            check('type', 'Type must be provided').isIn([
                'Acoustic Guitar',
                'Electric Guitar',
                'Guitar'
            ])
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {model, type, brand, specs, price, pic1, pic2, pic3, quantity} = req.body;

        try {
            const newOrderItem = new OrderItem({
                model,
                brand,
                specs,
                price,
                type,
                pic1,
                pic2,
                pic3,
                quantity,
                user: req.user.id
            });

            const orderItem = await newOrderItem.save();

            res.json(orderItem);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


// @route    PUT api/orders/:id
// @desc     Update a product
// @access   Private
router.put('/:id', auth.authMiddleware, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});

    const {model, type, brand, specs, price, pic1, pic2, pic3, quantity} = req.body;

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
    if (quantity) productFields.quantity = quantity;

    try {
        let product = await OrderItem.findById(req.params.id);

        if (!product) return res.status(404).json({msg: 'Product not found'});

        // Make sure user owns product
        if (product.user.toString() !== req.user.id)
            return res.status(401).json({msg: 'Not authorized'});

        product = await OrderItem.findByIdAndUpdate(
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

// // @route    DELETE api/orders/:id
// // @desc     Delete an order
// // @access   Private
router.delete('/:id', auth.authMiddleware, async (req, res) => {
    try {
        let product = await OrderItem.findById(req.params.id);

        if (!product) return res.status(404).json({msg: 'Product not found'});

        // Make sure user owns product
        if (product.user.toString() !== req.user.id)
            return res.status(401).json({msg: 'Not authorized'});

        await OrderItem.findByIdAndRemove(req.params.id);

        res.json({msg: 'Product removed'});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// // @route    DELETE api/orders
// // @desc     Clear users orders
// // @access   Private
// router.delete('/', auth.authMiddleware, async (req, res) => {
//     try {
//
//         let products = await OrderItem.find({ user: req.user.id });
//
//         if (!products) return res.status(404).json({msg: 'Products not found'});
//
//         await OrderItem.remove({user: req.user.id});
//
//         res.json({msg: 'All orders removed'});
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

module.exports = router;
