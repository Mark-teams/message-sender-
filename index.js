
const accountSid = 'AC838ca38a5d59848e369909586b255e06'; 
const authToken = 'bfef966a3875c2cc0b8bffff3a50cee9'; 
const client = require('twilio')(accountSid, authToken); 
const express=require('express');
const app=express();

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