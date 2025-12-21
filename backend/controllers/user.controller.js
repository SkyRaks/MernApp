import User from "../models/user.model.js";
// import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const register = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({success: false, message: "please provide all fields"});

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({success:true, message: "user registered!"})
    } catch (error) {
        console.error("error in register user: ", error.message);
        res.status(500).json({success: false, message: "server error"});
    }
};

export const login = async(req, res) => { // email and password 
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({success: false, message: "not found"});

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({success: false, message: "not allowed"});
        res.status(201).json({success: true, message: "user found!"});
    } catch (error) {
        console.error("error in login user: ", error.message);
        res.status(500).json({success: false, message: "server error"});
    }
};
