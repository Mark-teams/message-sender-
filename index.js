const { response } = require('express');
const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN; 

const client = require('twilio')(accountSid, authToken); 

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