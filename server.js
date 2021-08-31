const express = require('express')

const app = express();

app.use(express.json({extended : false}))

const multer = require('multer')

// k = require('./files')
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



app.get('/',upload.fields(fieldArray),async(req,res)=>{

    const body = Object.values(JSON.parse(JSON.stringify(req.body)));

    const files = Object.values(JSON.parse(JSON.stringify(req.files)));


    
//   const k = files.reduce((a,b)=>a.path+','+b.path)
  console.log(files);

})


app.use('/register',require('./routes/user/register'))
app.use('/login',require('./routes/user/login'))
app.use('/viewprofile',require("./routes/user/viewProfile"))
app.use('/editprofile',require("./routes/user/editProfile"))
app.use('/users',require("./routes/admin/allUsers"))
app.use('/verify',require("./routes/admin/verifyUser"))
app.use('/update',require("./routes/admin/verifyUser"))
app.use('/deleteuser',require('./routes/admin/deleteUser'))
app.use('/admin',require('./routes/admin/viewProfile'))




const PORT = process.env.PORT || 5000 ;


app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))

