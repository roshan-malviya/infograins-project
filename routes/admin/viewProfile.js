const express = require('express')
const { check, validationResult } = require('express-validator')
router = express.Router();
const db = require('../../db/db')
const adminChecker = require('./isAdmin')



router.get('/viewprofile/:userid',adminChecker,async(req,res)=>{


    try{

    const id = req.params.userid

    const profile = await db('user1').where("id",id)
            
    const result = Object.values(JSON.parse(JSON.stringify(profile)));
    console.log(result);

    res.send(result[0])

    }catch(err){
        res.status(500).send("Server error !!")
    }

})

module.exports= router;