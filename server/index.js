// import bodyParser from "body-parser";
// import express from "express";
// import mongoose from "mongoose";
// "type": "module",
// app.use(bodyParser.json({limit: '30mb',extended: true}))
// app.use(bodyParser.urlencoded({limit: '30mb',extended: true}))

const  dotenv =require ('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const AuthRoute = require('./Routes/AuthRoute.js')

dotenv.config()

//Routes
const app = express();


//MiddleWare
app.use(express.json())


//database
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true}).
then(()=>app.listen(process.env.PORT,()=>console.log("Connection to mongodb succed")))
.catch(err=> console.log("mongodb connection failed",err))


// usage of routers
app.use('/auth', AuthRoute)