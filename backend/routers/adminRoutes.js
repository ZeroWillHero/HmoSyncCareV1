const express = require('express');
const router = express.Router();
const models = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = models.User;
const Appointment = models.Appointment;


router.post('/signup', async (req, res) => {
    
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
    console.log(req.body)

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        if (!user.is_admin) {
            return res.status(400).json({ message: 'User not authorized' });
        }

        const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete ('/delete_user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post ('/create_appoinment', async (req, res) => {
    console.log(req.body)
    try {
        const appointment = await Appointment.create({
            user_id: req.body.user_id,
            title : req.body.title,
            appointment_date: req.body. appoinmentDate,
            appointment_time: req.body.appointment_time,
            disease : req.body.disease,
            approved : req.body.approved,
            done : req.body.done
            
            // Set the creation date on the server side
        });

        

        

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/appoints', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        const appointmentsWithUsers = await Promise.all(appointments.map(async (appointment) => {
            const user = await User.findById(appointment.user_id);
            return { ...appointment._doc, user };
        }));
        res.json(appointmentsWithUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// find appoints to approve 
router.get('/appoints/toapprove', async (req, res) => {
    try {
        const appointments = await Appointment.find({approved: false});
        const appointmentsWithUsers = await Promise.all(appointments.map(async (appointment) => {
            const user = await User.findById(appointment.user_id);
            return { ...appointment._doc, user };
        }));
        res.json(appointmentsWithUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// find approved appoints


router.get('/appoints/approved', async (req, res) => {
    try {

        const appointments = await Appointment.find({approved : true});
        const appointmentsWithUsers = await Promise.all(appointments.map(async (appointment) => {
            const user = await User.findById(appointment.user_id);
            return { ...appointment._doc, user };
        }));
        res.json(appointmentsWithUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/appoints/done', async (req, res) => {
    try {
        const appointments = await Appointment.find({approved : false});
        const appointmentsWithUsers = await Promise.all(appointments.map(async (appointment) => {
            const user = await User.findById(appointment.user_id);
            return { ...appointment._doc, user };
        }));
        res.json(appointmentsWithUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/appoinments/delete/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.patch('/appoints/update/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, {
            appointment_date: req.body.appointment_date,
            approved: true
        }, { new: true });

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});







module.exports = router;

