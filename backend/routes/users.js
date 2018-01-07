const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
//const db =  mongojs('mongodb://kuba:kuba@ds111124.mlab.com:11124/mytasklist_kuba', ['books']);

//mongo tutaj a nie w glownym server.js
const mongoose = require('mongoose');

//connect to db
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected', () => {
    console.log('polaczono z bazą ' + config.database)
});
//connection error
mongoose.connection.on('error', (err) => {
    console.log('błąd połączenia z bazą '+ err)
});

//register route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//authenticate route
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data: user}, config.secret, {
                    expiresIn: 604800 // 1 week 
                });
                res.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.username,
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        })
    })
});

//profile route
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user:req.user});
});

module.exports = router;