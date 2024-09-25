const  mongoose = require("mongoose");

require("dotenv").config();

const connnectWithDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB not Connected");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connnectWithDB;