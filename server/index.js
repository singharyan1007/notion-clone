const express=require('express');
const app=express();
const PORT=4000;

//imports
const http=require('http').Server(app);
const cors=require('cors');
const socketIO=require('socket.io')(http,{
    cors:{
        origin:'http://localhost:3000'
    }
});



app.use(express.urlencoded({extended:true}));
app.use(express.json());

socketIO.on('connection',(socket)=>{
    console.log(`${socket.id} user just connected`);

    socket.on('disconnect',()=>{
        socket.disconnect();
        console.log("User Disconnected");
    })
})

app.get('/api',(req,res)=>{
    res.json({
        message:"Hi this is Aryan"
    });
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
});
