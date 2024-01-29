const express = require('express');
const router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = models.User;
const Appointments = models.Appointment;

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const appointments = await Appointments.find({user_id : id});
    const user = await User.findById(id);

    const result = { user: user._doc, appointments: appointments.map(appointment => appointment._doc) };

    console.log(result);

    res.status(200).json(result);
});

module.exports = router;