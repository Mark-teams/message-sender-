
const accountSid = 'AC838ca38a5d59848e369909586b255e06'; 
const authToken = '9ec87737a56f263aad7ddba393b482d2'; 
const client = require('twilio')(accountSid, authToken); 
const { response } = require('express');
const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const app=express();
// var path=require('path');
// var cookieParser=require('cookie-parser');
// var logger=require('morgan');
// var createError=require('http-errors');

//SID SK74b516194454f6002429908d02e6751e
// secret i6vWfXlc2PKG3WHFBp7vtbsXaNuIQos1

// app.options('*', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
//   res.setHeader('Access-Control-Allow-Methods', 'POST'); // Add other methods here
//   res.send();
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
 console.log(req)
  res.send("hello world");
})
app.post('/sendmessage',(req,res)=>{
  console.log("service started",req)
  client.messages 
      .create({ 
         body: req.body.message, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+918667849150' 
       }) 
      .then(messages => res.send(messages.sid))
      .catch(err=> res.send(err)) 
      .done();

})


const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`Listening 4000...`))