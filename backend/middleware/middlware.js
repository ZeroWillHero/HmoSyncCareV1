const express = require('express');
const router = express.Router();
const models = require('../models/models');




function checkPermission(role) {
    return function (req, res, next) {
        if (req.user.role !== role) {
            res.status(403).json({ message: 'You are not allowed to access this route' });
        }

        else {
            next();
        }
    }
}



