const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
    '/',
    [
        check('firstname', 'First name is required')
            .not()
            .isEmpty(),
        check('lastname', 'Last name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstname, lastname, email, password, remember_me } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            user = new User({
                firstname,
                lastname,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10); //password encryption

            user.password = await bcrypt.hash(password, salt); //hash version of the password

            await user.save();

            const payload = {
                user: {
                    id: user.id //_id ?
                }
            };

            if(remember_me) {
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    }
                );
            } else {
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    { expiresIn: 360 }, //set remember me
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    }
                );
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
