const express = require('express');
const router = express.Router();
const models = require('../models/models');

// appointments routes 

const Appointment = models.Appointment;

router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const appointments = await Appointment.find({user_id : id});
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { user_id, appointment_date, appointment_time } = req.body;
    console.log(req.body)

    try {
        const newAppointment = new Appointment({
            user_id,
            appointment_date,
            appointment_time
        });

        await newAppointment.save();

        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

