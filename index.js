const express=require('express');
const cors = require('cors');
const app=express();
const dotenv=require('dotenv')
dotenv.config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN; 

const client = require('twilio')(accountSid, authToken);


const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: "30916bdb",
  apiSecret: "OEfHqA1WB6k5VLJe"
})

const from = "Vonage APIs"
const to = "918667849150"


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.send("hello world");
})

app.post('/SendVonage',(req,res)=>{
  console.log(req)
  vonage.message.sendSms(from, to, req.body.message, (err, responseData) => {
    if (err) {
        // console.log(err);
        res.send(err)
    } else {
        if(responseData.messages[0]['status'] === "0") {
          res.send("success"+from+" " +to+" "+ req.body.message)
          // document.getElementById("PopupWindow").innerHTML=`<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          // <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
          // <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          // </svg><h2 align="center">Thanks for your response.<br/> Our team members we call you shortly</h2>`
        } else {
          res.send("Failed"+" " +from+" " + to+" " + req.body.message)
          // document.getElementById("PopupWindow").innerHTML=`<svg class="checkmarkError" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          //   <circle class="checkmark__circleError"  stroke="#FF0000" cx="26" cy="26" r="25" fillError="none" />
          //   <path class="checkmark__check" fill="none" d="M16 16 36 36 M36 16 16 36" />
          // </svg><h2 align="center">Sorry for the Inconvinience.<br/>Server is under maintenance.</h2>`
        }
    }
  })
})

app.post('/sendmessage',(req,res)=>{

  console.log(req)
  client.messages 
      .create({ 
         body: req.body.message, 
         from: 'whatsapp:+918667849150',   //   
         to: 'whatsapp:+918925672761' 
       }) 
      .then(messages => res.send(messages.sid))
      .catch(err=> res.send(err)) 
      .done();

})


const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`Listening 4000...`))