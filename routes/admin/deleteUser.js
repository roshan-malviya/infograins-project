const express = require('express')
const { check, validationResult } = require('express-validator')
router = express.Router();
const db = require('../../db/db')
const adminChecker = require('./isAdmin')


router.delete('/:id',adminChecker,async(req,res)=>{

    try {
        const id = req.params.id
        const user = await db('user1').where({id})
        if(user.length!==0){
        await db('user1').where({id}).del()

        return res.send('user deleted !!')}

        res.status(404).send('no user found !!')
    } catch (err) {

        console.error(err);
        res.status(500).send("Server error !!")        
    }



})


module.exports= router;