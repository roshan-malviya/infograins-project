const express = require('express')
router = express.Router();
const db = require('../../db/db')
const adminChecker = require('./isAdmin')
router.put('/:id',adminChecker,async(req,res)=>{
    
    const id = req.params.id

    try {

        const user = await  db('user1').where({id})
        if(user.length!==0){
        console.log(user);
        await db('user1').where({id}).update({isverified:1})

       return  res.send('user is verified.......')

        }
        res.status(404).send("user not found !!")
        
        
    } catch (err) {

        console.error(err);
    }
})



router.put('/status/:id',adminChecker,async(req,res)=>{
    
    const id = req.params.id
    const {status}= req.body

    try {

        const user = await  db('user1').where({id})
        if(user.length!==0){
        console.log(user);
        await db('user1').where({id}).update({status})

       return  res.send('user status is updated .......')

        }
        res.status(404).send("user not found !!")
        
        
    } catch (err) {

        console.error(err);
    }
})


module.exports = router;