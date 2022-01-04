const accountSid = 'ACc7d6e0aa827c5b77a0986fdb40651831'; 
const authToken = '4021740eec2538f14ec5a2992f5bdc39'; 
const client = require('twilio')(accountSid, authToken); 

// console.log("hello world")
// const server=http.createServer((req,res)=>{
//   if(req.url==='/'){
//           console.log("Get Method Called");
//           client.messages
//           .create({
//               body: `Here's that picture of an owl you requested.`,
//             from: 'whatsapp:+14155238886',
//             to: 'whatsapp:+918667849150'
//           }).then(message => console.log(message.sid));

//   }
//   if (req.url==='/api/courses'){

//   }
// });
// server.listen(4000);


const express=require('express');
const app=express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hello world');
})

app.post('/sendmessage',(req,res)=>{
  console.log("Get Method Called");
          client.messages
          .create({
              body:req.body.message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+918667849150'
          }).then(message => res.send(message.sid));

})

const port=process.env.PORT||4000;
app.listen(port,()=>console.log(`Listening 4000...`))