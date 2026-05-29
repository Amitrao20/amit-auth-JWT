import mongoose from "mongoose";
import config from "../config/config.js";
const userSchema = new mongoose.Schema({
    username: {
        type: String,       
        required:[true, "Username is required"],
        unique: true
    },  
    email: {
        type: String,
        required: [true, "Email is required"], 
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    verified: {
        type: Boolean,
        default: false
    }
});
const User = mongoose.model("User", userSchema);
export default User;