const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const User = require('../models/User');

// @route    GET api/products
// @desc     Get all products
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        const products = await Product.find({ user: req.user.id }).sort({
            date: -1
        });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route    POST api/products
// @desc     Create a contact
// @access   Private
router.post(
    '/',
    [
        auth,
        [
            check('model', 'Model is required')
                .not()
                .isEmpty(),
            check('type', 'Type must be provided').isIn([
                'Acoustic',
                'Electric Guitar'
            ]) //change is as soon as you decide what you gonna sell
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { model, type, brand, specs, price, pic1, pic2, pic3 } = req.body;

        try {
            const newProduct = new Product({
                model,
                brand,
                specs,
                price,
                type,
                pic1,
                pic2,
                pic3,
                user: req.user.id
            });

            const product = await newProduct.save();

            res.json(product);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route    PUT api/products/:id
// @desc     Update a product
// @access   Private
router.put('/:id', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { model, type, brand, specs, price, pic1, pic2, pic3 } = req.body;

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

        if (!product) return res.status(404).json({ msg: 'Product not found' });

        // Make sure user owns product
        if (product.user.toString() !== req.user.id)
            return res.status(401).json({ msg: 'Not authorized' });

        product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: productFields },
            { new: true }
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
router.delete('/:id', auth, async (req, res) => {
try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    // Make sure user owns product
    if (product.user.toString() !== req.user.id)
        return res.status(401).json({ msg: 'Not authorized' });

    await Product.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Product removed'});
} catch (err) {
    console.error(err.message);
    res.status(500).send('Server error put');
}
});




module.exports = router;
