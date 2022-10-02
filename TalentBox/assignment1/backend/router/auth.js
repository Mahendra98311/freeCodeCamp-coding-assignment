const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


//require('../db/conn');
const User = require('../model/userSchema');

 router.get('/', (req, res) => {
     res.send(`Hello world from router js`);
 });

router.post('/register', async (req, res) =>{

 const { name, email, password, cpassword} = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the form properly"});
    }

    try{
        const userExist = await User.findOne({ email: email });

        if(userExist){
            return res.status(422).json({ error: "Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({ error: "incorrect password"});
        }else {
            const user = new User({name, email, password, cpassword});

            await user.save();
    
           
    
            res.status(201).json({ message: "user registered successfully" });
        }

       
        

    } catch(err){
        console.log(err); 
    }

});

// login route

router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "awesome"});
    try {
        let token;
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(404).json({error:"Invalid credentials"})
        }

        const userLogin = await User.findOne({ email: email });

        //console.log(userLogin);

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                thhpOnly:true
            });

        if (!isMatch) {
            res.status(404).json({ error: "Invalid credentials" });
        }else {
            res.json({ message: "user signin successfully" });
        }
        }else {
            res.status(404).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, userLogin.password);

        if (!isMatch) {
            res.status(404).json({ error: "Invalid credentials" });
        }else {
            res.json({ message: "user signin successfully" });
        }

        
    }catch(err){
        console.log(err);
    }
});

router.get('/logout', (req, res) => {
    console.log('Logout success');
    res.clearCookie('twtoken', {path:'/'});
    res.status(200).send('User Logout');
});

module.exports = router;