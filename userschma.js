import mongoose from "mongoose";
import { Schema,model} from "mongoose";
import connectmongo from "./dbconnection.js";
const userschema = new mongoose.Schema({
    fullname: {
        type:String ,
        required:[true,"this is a required field "],
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"mail is a required field "],
        unique:true

    },
    password:{
        type:String,
        required:[true,"password is a required field "],
        lowercase:true

    }
})
const user = model("stored structure",userschema)
export default user 