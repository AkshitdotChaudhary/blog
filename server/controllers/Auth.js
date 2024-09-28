const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signup = async (req,res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already Exists",
            });
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(500).json({
                success:false,
                message:"Error in hashing",
            });
        }


        const user = await User.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"User Created Sucessfully",
        });

    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"User not Created",
        });
    }
}


exports.login = async (req,res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill details carefully",
            });
        }

        const user = await User.findOne({email});

        if (!user){
            return res.status(401).json({
                success:false,
                message:"User not found",
            });
        }


        const paylaod = {
            email:user.email,
            id:user._id,
        }
        if(await bcrypt.compare(password,user.password)){
            
            let token = jwt.sign(
                paylaod, 
                process.env.JWT_SECRET,
                {
                    expiresIn:"2h",
                });
            
            user.token = token;
            user.password = undefined;

        }
        else{
            res.status(403).json({
                success: false,
                message:"Password incorrect",
            })
        }
    } catch (error) {
        
    }
}