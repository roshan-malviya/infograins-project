
const db = require('../../db/db')


module.exports = async(req,res,next)=>{
    try {
        adminId=req.body.adminId
        if(!adminId){
            return res.status(400).send("Please eneter a admin id ")
        }
        let isAdmin = await db('user1').select('isadmin').where({id:adminId})
        const resul = Object.values(JSON.parse(JSON.stringify(isAdmin)));
    
        isAdmin=resul[0].isadmin

        if(isAdmin){
            next()
        }else{
            res.send('you are not an admin!!')
        }


    } catch (err) {

        console.error(err);
        
        res.status(500).send('Error while validating the admin ')
        
    }
}
