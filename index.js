const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("hi");
// })

app.post("/signup",(req,res)=>{
    const {Username,email,password,dob} = req.body;

    if(!Username){
        return res.status(400).json({
            error:`Username cannot be empty`
        })
    }
    if(!email){
        return res.status(400).json({
            error:`Email cannot be empty`
        })
    }

    if(password.length>16 || password.length<8){
        return res.status(400).json({
            error:`Password length should be greater than 8 or less than or equal to 16 `
        })
    }
    // return res.send(json({
    //     message:"Successfully signed up",
    // }))

})

app.listen(PORT,()=>{
    console.log(`This server is running in  http://localhost:${PORT}`)
})