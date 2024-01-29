const express = require('express');
const app = express();  
require('dotenv').config();
const userRouters = require('./routers/userrouters');
const appointmentRouter = require('./routers/appointmentRouter');
const signupRoute = require('./routers/signup');
const logInRoute = require('./routers/login');
const profileRoute = require('./routers/profile');
const CurrentAppoinment = require('./routers/CurrentAppoinment');
const mongoose = require('mongoose');
const cors = require('cors');

// middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next();
})

// whole routes in app 
app.use('/users',userRouters);
app.use('/appoints',appointmentRouter);
app.use('/signup',signupRoute);
app.use('/login',logInRoute);
app.use('/profile',profileRoute);
app.use('/current',CurrentAppoinment);





// database connection 
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=> {
    console.log('Database connected');

})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
})