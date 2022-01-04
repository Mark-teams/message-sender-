

const express=require('express');
const app=express();
const accountSid = 'AC838ca38a5d59848e369909586b255e06'; 
const authToken = '18d03a26f714cceebfb50e872c109d1a'; 
const client = require('twilio')(accountSid, authToken); 
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.post('/testsite',(req,res)=>{
  res.send("Respose")
})

app.post('/sendmessage',(req,res)=>{
  console.log("service started",req.body.message)

  client.messages.create({
            body:req.body.message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918667849150'
          }).then(message => res.send(message.sid));

})


const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`Listening 4000...`))