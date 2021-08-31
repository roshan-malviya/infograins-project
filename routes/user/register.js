const express = require('express')
const { v4 } = require('uuid')
router = express.Router();
const db = require('../../db/db')
const multer = require('multer')



const fileStorageEngiene = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./files')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage:fileStorageEngiene})


const fieldArray = [
    {name:'files',maxCount:3},
    {name:'name',maxCount:1},
    {name:'email',maxCount:1},
    {name:'type',maxCount:1},
    {name:'password',maxCount:1},
    {name:'number',maxCount:1},
]

router.post('/user', upload.fields(fieldArray),async (req, res) => {



    try {

        const body = Object.values(JSON.parse(JSON.stringify(req.body)));

        const files = Object.values(JSON.parse(JSON.stringify(req.files)));

    if(files.length!==0){

        const [ name,email, type, password, number ] = body;
        const filesArray =files[0];
        console.log(filesArray);
        const documentFiles = filesArray.reduce((a,b)=>a.path+','+b.path)

        console.log(documentFiles);


        const id =v4();
        const resps = await db('user1').insert({
            id,
            name,
            email,
            type,
            password,
            status:'activate',
            number,
            isverified: 0,
            isadmin:0,
            documents:documentFiles

        }
        )

        
        res.status(200).json({id})
    }
        res.status(400).send('Please attach asked documents ')

    } catch (err) {
        console.error(err);

        if(err.code=="ER_DUP_ENTRY"){
            return res.status(400).json('User already exist!!')
        }else if(err.code='ER_NO_DEFAULT_FOR_FIELD'){
            res.status(400).send('Some info is missing please give all asked details ')
        }
        res.status(500).json('Server error !!')

    }

})



module.exports = router;