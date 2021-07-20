//express module import

const express= require('express')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

//needed varaibles initialze
const app= express()
const port=4000

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
   apiKey: "AIzaSyBm7ddh2i8pihlET2keYu9HZv2TAk94cB0",
   authDomain: "busyhubs-6521d.firebaseapp.com",
   projectId: "busyhubs-6521d",
   storageBucket: "busyhubs-6521d.appspot.com",
   messagingSenderId: "536916012128",
   appId: "1:536916012128:web:6bc4666951ce92aa2aa705"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

app.set('view engine','ejs')

app.use(express.static('varaties'))

app.get('/',(req,res)=>{
   res.render('series/home')
})


app.get('/games',(req,res)=>{
    res.render('series/games')
 })

 app.get('/pc',(req,res)=>{
    res.render('series/pc')
 })

 app.get('/ps3',(req,res)=>{
   res.render('series/ps3')
})

app.get('/ps4',(req,res)=>{
   res.render('series/ps4')
})

app.get('/x-box',(req,res)=>{
   res.render('series/x-box')
})

app.get('/end',(req,res)=>{
   res.render('series/end')
})

app.listen(port, ()=>{
   console.log(`app is listening at port ${port}`)
})