const express=require("express");
const http=require("http");
const path=require("path");

const app=express();
const register=require("./register");



const port=process.env.port || 5000;

app.use('/db',register);



app.use(express.static(__dirname+ '/dist/Jobmates'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/Jobmates/index.html'))
   
});
app.get('/check',(req,res)=>{
    res.redirect('https://exporwanda.tk');
});



const server=http.createServer(app);
 
server.listen(port,()=>{
    console.log("server is running on port "+port);

});