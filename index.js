
const accountSid = 'AC838ca38a5d59848e369909586b255e06'; 
const authToken = '9ec87737a56f263aad7ddba393b482d2'; 
const client = require('twilio')(accountSid, authToken); 
const express=require('express');
const app=express();
//SID SK74b516194454f6002429908d02e6751e
// secret i6vWfXlc2PKG3WHFBp7vtbsXaNuIQos1
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/',(req,res)=>{
  res.send('hello world');
})

app.post('/sendmessage',(req,res)=>{
  console.log("service started")
  client.messages 
      .create({ 
         body: String(req.body.message), 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+918667849150' 
       }) 
      .then(messages => res.send(messages.sid)) 
      .done();

})


const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`Listening 4000...`))