const express = require("express");  // Import the express module
const app = express(); // Create an instance of the express application
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const cors = require('cors');
app.use(cors());

const userRoute = require("./routes/userRoute")

app.use(express.json());


mongoose
.connect(process.env.URI) // here merndb is database name
.then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 5000, (err)=>{
        if(err) console.log(err);

        console.log(`running at port ${process.env.PORT}`);
    }); //if DB connected then only Start the server and have it listen on port 4000
}).catch((error) => {
    console.log("error", error);
});

app.use(userRoute);



