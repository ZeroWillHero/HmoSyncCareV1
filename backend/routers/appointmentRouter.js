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
    const { user_id, appointment_date, appointment_time,title,disease } = req.body;
    console.log(req.body)

    try {
        const newAppointment = new Appointment({
            user_id,
            appointment_date,
            appointment_time,
            title,
            disease
        });

        await newAppointment.save();

        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/appoint/delete/:id',async(req,res) => {
    try {
        const appoinment = Appointment.findOneAndDelete(id);
    }catch(error) {
        res.json(error.message)
    }
})



module.exports = router;

