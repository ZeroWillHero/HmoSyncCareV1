const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : String ,
    lastname : String ,
    email : {
        type: String,
        required : true,
        unique : true
    },

    profile_image : {
        type: String,
        default : 'https://www.gravatar.com/av'
    },

    password : {
        type: String ,
        required : true
    },

    is_admin : {
        type: Boolean,
        default : false
    },

    is_active : {
        type: Boolean,
        default : true
    },

    address : {
        type: String,
        default : ""
    },

    
    created_at : {
        type: Date,
        default : Date.now()
    },
    

    dob : {
        type: Date,
        
    },

    age : {
        type: Number,
        default : 0
    },

    

    
    
});

const User  = mongoose.model('User',userSchema);                                                                                           

const AppointmentSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    title : {
        type : String,
        
    
   
    },

    approved : {
        type : Boolean,
        default : false
    },
    

    disease : {
        type : String
        
    },

    appointment_date : {
        type : Date

    },

    appointment_time : {
        type : String,

    },

    done : {
        type : Boolean,
        default : false
    },

    participate_times : {
        type: Number,
        default : 1
    },

    


    
});

const Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = {
    User,
    Appointment
}