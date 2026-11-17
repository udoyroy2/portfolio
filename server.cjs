const express = require ("express");
const mongoose = require ("mongoose");
const cors = require("cors");
const { error } = require("three");
require("dotenv").config();

const Message = require("./models/Message.cjs")

const app = express();


app.use(cors());
app.use(express.json());


app.get("/",( req , res) => {
    res.send("Portfolio Backend running!");
});

app.post("/api/contact", async (req , res)=>{
    try{
        const {name,email,subject,message} = req.body;


        if (!name || !email || !subject || !message){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }


        const newMessage = new Message({
            name,
            email,
            subject,
            message
        })
        await newMessage.save();

        res.status(201).json({
            success: true,
            message: "Awesome bro 🤟! Your message has been received. I'll get back to you as soon as possible! 🚀"
        })

    }catch(error){
        console.error("Form error", error);

        res.status(500).json({
            success:false,
            message: "Failed to submit message"
        });
    }
});








mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:",error);

})


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});