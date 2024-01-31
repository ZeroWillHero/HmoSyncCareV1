const express = require('express');
const router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = models.User;
const Appointment = models.Appointment;


router.post('', async (req, res) => {
    
    const existingUser = await User.findOne({email : req.body.email});
        if(existingUser){
            console.log('User already exists')
            return res.status(400).json({message : 'User already exists'});

    }
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            is_admin: req.body.is_admin,
            is_active: req.body.is_active,
            address: req.body.address,
            age: req.body.age,
            dob: req.body.dob,
            created_at: new Date() // Set the creation date on the server side
        });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.post('/login',async(req,res) => {
    const {email,password} = req.body;

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
})







module.exports = router;

