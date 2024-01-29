const express = require('express');
const router = express.Router();
const models = require('../models/models');

router.get ('/:id',async(req,res) => {
    const { id} = req.params;
    const appointments = await models.Appointment.find({done : false, user_id : id, approved : true});
    res.json(appointments).status(200);
})

module.exports = router;