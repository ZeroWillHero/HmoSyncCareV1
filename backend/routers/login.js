const express = require('express');
const router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = models.User;

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;