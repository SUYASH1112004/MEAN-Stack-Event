const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
// const user = require('../model/user');
const Event = require('../model/event');
const Special = require('../model/special');
const Inside = require('../model/input');
const db= "mongodb://localhost:27017/Event";


async function connection1()
{
try{
 await mongoose.connect(db,
   
    // useNewUrlParser : true,
    // useUnifiedTopology : true
)
console.log("Connected to mongodb");
}
catch(err)
{
console.error('Mongodb connection Failed :',err);
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
        const payload = jwt.verify(token,'secretKey');
        req.userId=payload.subject;
        next();
    }
    catch(err)
    {
        return res.status(401).send('Unauthorized request');

    }
    
}
router.post('/register',async(req,res)=>{
    const {name,email,password,collegeid} = req.body
    
    try{
        const data = req.body;    
        const user = new  Inside(data);
        await user.save();
        res.status(201).json({message:"User registered Successfull",user1: user});
    }
    catch(err){
        console.error("Error occured :"+err);
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

router.get('/getregister/:collegeid', async (req, res) => {
    try {
        const collegeid = req.params.collegeid;
        const password = req.params.password;
        
        // Check if collegeid is valid
        if (!collegeid) {
            return res.status(400).json({ error: "College ID is required" });
        }

        const events = await Inside.find({ collegeid: collegeid });

        // if(events.password !== password)
        // {
        //     return res.status(400).json({error:"Enter the correct password"});
        // }

        res.status(200).json(events); // ✅ Corrected response
    } catch (err) {
        res.status(500).json({ error: err.message }); // ✅ Use 500 for server errors
    }
});


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
    try{
    const {name,password} = req.body;

    const user = await User.findOne({name});
    if(!user  || user.password !== password)
    {
        return res.status(401).json({error:"Invalid Email or Password"});
    }


        let payload = {userId : user._id};
        let token = jwt.sign(payload,'secretKey',{expiresIn : '2h'});
        res.status(200).send({token})
}
    catch(err){
        res.status(401).send('Invalid Password');
    }
})


router.post('/signup',async(req,res)=>{

    const {name,collegeid,password} = req.body;
    const  found = await User.findOne({collegeid});
    
    if (!collegeid) {
        return res.status(400).json({ error: "College ID is required" });
    }
    if(found)
        {
            return res.status(401).send('User already signedup');
    
        }
    try{
        
        const user = new User({name,collegeid,password});
        await user.save();
        res.status(201).json({message : " Signed Up Successfully"});
    }
    catch(err){
        console.log("Error occured :",err);
        res.status(500).json({error:"Error while signup ."});

    }
})


// router.get('/')
// {

// }



module.exports = router;