const express = require('express')
const { check, validationResult } = require('express-validator')
const { v4 } = require('uuid')
router = express.Router();
const db = require('../../db/db')

router.get('/:id',async(req,res)=>{

    try{
        userId = req.body.id
        const user = await db('user1').select('isverified').where('id',userId)
        const r = Object.values(JSON.parse(JSON.stringify(user)))[0];
        const verification = r.isverified
        console.log(verification);
        if (verification==true){
 const id = req.params.id;

    const profile = await db('user1').select('name','email','type','number','isverified').where("id",id)
            
    const result = Object.values(JSON.parse(JSON.stringify(profile)));

    if(result[0].isverified){

     return res.send(result[0])

    }
   
    res.status(400).send("user is not verified yet!!")
    


    console.log(result[0]);

        }
        else{
            res.send('You are not verified yet please ask user for varification !!')
        }
}catch(err){
        console.error(err);
        res.status(500).send('Server Error')
    }




})




module.exports= router;
