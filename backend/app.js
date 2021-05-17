const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const mongodb = require("mongodb").MongoClient;

const app = new express();

app.use(cors());

app.use(bodyparser.json());

var db;

mongodb.connect("mongodb+srv://jammystark:jammystark@cluster0.g5uaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;", (error, databases)=>
{
  if(!error)
  {
  db = databases.db("capeapp");
  console.log("DB Connected");
  }
  else{
    console.log("DB Not Connected");
  }

});

var products=[{pdtimgPath:"http://localhost:4200/assets/images/meet1.jpg"},
              {pdtimgPath:"http://localhost:4200/assets/images/meet2.jpeg"},
              {pdtimgPath:"http://localhost:4200/assets/images/meet3.jpg"},
              {pdtimgPath:"http://localhost:4200/assets/images/meet4.jpg"}]

app.get("/listproducts", (req, res)=>{

  res.json(products);
});


app.post("/enquiry",(req, res)=>{

  req.body._id = new Date().getTime();

  console.log(req.body);

  db.collection("usersenq").insert(req.body, (error, data)=>{

    if(error)
    {
      res.status(401).json("Errors In Insert Query...!");
    }
    else
    {
      res.json("Your Message Sent SuccessFully...!");
    }

  });
});

module.exports = app;
