const express = require('express')
const { check, validationResult } = require('express-validator')
const { v4 } = require('uuid')
router = express.Router();
const db = require('../../db/db')


router.put('/:id',async(req,res)=>{
    try {
        await db('user1').where({id:req.params.id}).update(req.body)
        res.send("Updated successfully.....")

    } catch (err) {
        
        console.error(err);
        if(err.code=="ER_BAD_FIELD_ERROR"){
            
            return res.send("please enter valid data ")

        }
        
        res.status(500).send('Server error !!')
        
    }
})



module.exports= router;