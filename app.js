//express module import

const express= require('express')

//needed varaibles initialze
const app= express()
const port=4000

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

app.listen(port, ()=>{
    console.log(`app is listening at port ${port}`)
})