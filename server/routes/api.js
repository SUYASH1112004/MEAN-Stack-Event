const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

const Event = require('../model/event');
const Special = require('../model/special');
const Inside = require('../model/input');

const bcrypt=require('bcrypt');
const SALT_ROUNDS=10;
//Loading Environment Variable
require('dotenv').config();

const db = process.env.MONGODB_URI;

async function connection1()
{
    try{
        await mongoose.connect(db);
        console.log("Connected To MongoDb");
    }
    catch(err)
    {
        console.log("MongoDB Connecton Failed :",err)
    }

}

connection1()




function verifyToken(req,res,next)
{
    const authHeader = req.headers.authorization;

    if(!authHeader)
    {
        return res.status(401).send('Unauthorized request');
    }

    const token = authHeader.split(' ')[1]
    if(!token || token === 'null')
    {
        return res.status(401).send('Unauthorized Request');
    }
    
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        req.userId=payload.subject;
        next();
    }
    catch(err)
    {
        return res.status(401).send('Unauthorized request');

    }
    
}
router.post('/register',async(req,res)=>{
    
    try{
        const data = req.body;
        const user = new  Inside(data);
        await user.save();
        res.status(201).json({message:"User registered Successfully",user1: user});
    }
    catch(err){
        console.log("Error occured :"+err);
        res.status(500).json({error: err.message});
    }
})

router.get('/events', async (req,res)=>{
        try
        {
            const users = await Event.find();
            res.json(users);
        }
        catch(err)
        {
            res.status(500).json({error : err.message});

        }
})

router.get('/special',verifyToken,async (req,res)=>
{   
    try{
        const specialevents = await Special.find();
        res.json(specialevents);
    }
    catch(err)
    {
        res.status(500).json({error : err.message});
    }

})



router.post('/login',async (req,res)=>{

    try
    {

        const{collegeid,name,password} = req.body;
        const existinguser = await User.findOne({collegeid});
        if(!existinguser)
        {
            return res.status(401).json({Message:'Invalid Email Or Password'})
        }
        
        const match = await bcrypt.compare(password,existinguser.password);
        if(!match)
        {
            return res.status(401).json({message:"Invalid Password"});
        }

        //Generating JWT Token
        const token = jwt.sign({subject : existinguser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).send({token});
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send('Error Logging In');
    }
      
});


router.post('/signup',async(req,res)=>{
    try{
        const{name,collegeid,password} = req.body;

        const exist = await User.findOne({collegeid});
        if(exist)
        {
            return res.status(400).send("User Already Exist Please Login");
        }

        const hashed = await bcrypt.hash(password,SALT_ROUNDS);
        const user = new User({name,collegeid,password:hashed});
        await user.save();

        res.status(201).json({ message: "User Signed Up Successfully" });

    }
    catch(err)
    {
        res.status(500).send("Error While SignIn "+ err);
    }

});

router.get('/getregistered/:collegeid',async(req,res)=>{
    try{
        const collegeid = req.params.collegeid;
        if(!collegeid)
        {
            return res.status(400).json({error:"College Id is invalid"});
        }
        const events = await Inside.find({collegeid});
        return res.status(200).json(events);
    }
    catch(err)
    {
        return res.status(500).json({error : err.message});
    }
});

module.exports = router;


