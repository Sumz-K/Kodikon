// const express=require('express')
// const { default: mongoose } = require('mongoose')

// const app=express()


// app.use(express.urlencoded({extended:false}))

// app.use(express.json())

// const mongourl='mongodb://localhost:27017'
// mongoose.connect(mongourl,{
//     useNewUrlParser:true
// }).then((client)=>{
   
    
// })
// .catch((e)=>{
//     console.log(e)
// })

// const db=mongoose.connection
// db.once('open',()=>{
//     console.log("Connected")
// })
const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";




app.get('/',(req,res)=>{
    console.log("hello")
    MongoClient.connect(url, function(err, db) { if (err) throw err;
        console.log("Monog connected")
        let dbo = db.db("Kodikon"); dbo.collection("datastuff").find({}).toArray(function(err, result) {
            if (err) throw err; 
            res.send(result);
            console.log(result)
             db.close();
            }); 
        });
})

app.listen(8000,()=>{
    console.log("server started")
})