const express = require('express');
const router = express.Router();
const models = require('../models/models');
const bycrypt = require('bcrypt');

const user = models.User;

router.post ('/',async (req,res) => {
    const {firstname,lastname,email,password} = req.body;

    console.log(req.body);
    // hashing password before store in databse

    try {
        const existingUser = await user.findOne({email});
        if(existingUser){
            console.log('User already exists')
            return res.status(400).json({message : 'User already exists'});

        }

        const hashedPassword = await bycrypt.hash(password,12);

        const newUser = new user({
            firstname,
            lastname,
            email,
            password : hashedPassword
        });

        await newUser.save();

        return res.status(200).json({message : 'User created successfully'});


    }catch (error) {
        return res.status(500).json({message : 'Something went wrong'});
    }
})

module.exports = router;

