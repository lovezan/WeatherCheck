const express =require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');
// const port=process.env.port ||8000;
const port =3000;

//public static patt
// console.log();
const static_path=path.join(__dirname,"../public");
app.set('view engine','hbs');

const template_path=path.join(__dirname,"../templates/views");
app.set('views',template_path)

const partial_path=path.join(__dirname,"../templates/partials");
hbs.registerPartials(partial_path)

app.use(express.static(static_path))
app.get("",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("/Contact",(req,res)=>{
    res.render('contact',{
        errorMsg:'Opps Page Not Found!'
    })
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Opps Page Not Found!'
    })
})


app.listen(port,()=>{
console.log(`this is port ${port}`)
})