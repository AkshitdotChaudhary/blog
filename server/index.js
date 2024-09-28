const express = require("express");
const app = express();


require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

const blog = require("./routes/blog")
const user = require("./routes/user")
app.use("/api/v1", user);
app.use("/api/v1", blog);


const connnectWithDB = require("./config/database");
connnectWithDB();



app.listen(4000, () => {
        console.log("App is running")
    }
)


app.get("/", (req,res) => {
    res.send("<h1>this is homepage</h1>")
})