const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const jwt=require('jsonwebtoken');

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


mongoose.connect('mongodb://172.16.1.12:27017/test',{useNewUrlParser:true})
.then(()=>console.log("DB connected"))
.catch(err=>console.error('Errors:',err));

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
    password2:String
});
const userModel=new mongoose.model('Users', userSchema);


router.post('/register',(req,res)=>{

async function addUser(){
    const user= new userModel({
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2
    });
    try{
        const save=await user.save();
        console.log(save+' user saved successful');
        
        }
        catch(ex){
            console.log(ex.message);
        }
    }
    addUser();
});

router.post('/login',(req,res)=>{

    async function logUser(){
        userEmail=req.body.email;
   
        try{
            
            const userData= await userModel.findOne({email:req.body.email,password:req.body.password});
            if(!userData) return res.status(400).send('Invalid credentials');
            const token=jwt.sign({email:userData.email},'tokenKey');
            console.log(token);
           
            }
            catch(ex){
                console.log(ex.message);
            }
        }
        logUser();
    });

router.get('/check',(req,res)=>{
async function getUser(){
    const userinfo=await userModel.find()
                            .select('email password password2');

 console.log('Byabaye data ziragaragara man');
  res.send(userinfo);
 if(!userinfo){
   //  res.send("User not found");
     console.log('user not found check db');
 };


}
getUser();

//res.send(req.body);
// console.log(req.body);

});

module.exports = router;