const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
        res.send('<h1>W</h1>Welcome to Home');
})
app.get('/about',(req,res)=>{
    res.send('Welcome to About');
})
app.get('/temp',(req,res)=>{
    res.send({
        id:1,
        name:'shashi',
    });
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});