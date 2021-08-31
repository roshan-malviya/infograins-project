const express = require('express')
const { check, validationResult } = require('express-validator')
const { v4 } = require('uuid')
router = express.Router();
const db = require('../../db/db')


router.get('/user', async (req, res) => {
    const { email, password, type } = req.body;
    try {
        const data = await db('user1').where('email',email).andWhere('password',password).andWhere('type',type)
        console.log(data);
        if (data.length!=0){

            if(data['isverified'] && data['status']=="active"){

                const result = Object.values(JSON.parse(JSON.stringify(data)));

                return res.send(result[0].id)
            }else{
                return res.status(404).send("You are not verified yet please ask admin for verification !!")
            }
            
        }
        res.status(400).send("User dosen't exist !!")
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error !!')
        
    }
})

module.exports = router;