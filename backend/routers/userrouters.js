const express = require('express');
const router = express.Router();
const models = require('../models/models');

// user routes 
const user = models.User;

router.get ('/',async (req,res) => {
    const users = await user.find();
    res.json(users).status(200);
})

router.get('/:id',async(req,res) => {
    const { id } = req.params;
    const users = await user.findById(id);
    res.json(users).status(200);
})

router.post('/',async(req,res) => {
    const { firstname, lastname, email, password, is_admin, is_active, is_completed } = req.body;

    try {
        const newUser = new user({
            firstname,
            lastname,
            email,
            password,
            is_admin,
            is_active,
            is_completed
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
})

router.patch('/',(req,res) => {
    res.json({
        message : 'Welcome to the home page patch'
});
});


module.exports  = router;