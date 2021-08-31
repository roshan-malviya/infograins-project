const express = require('express')
router = express.Router();
const db = require('../../db/db')
const adminChecker = require('./isAdmin')

router.get('/',adminChecker,async(req,res)=>{

    const users = await db('user1').select('*')
    const result = Object.values(JSON.parse(JSON.stringify(users)));

    res.send(result)
})


module.exports = router;