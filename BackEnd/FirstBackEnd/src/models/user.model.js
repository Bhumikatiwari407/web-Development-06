import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
fullname:{
    type: String,
    required: true,
},
photo:{
    type: String,
},
email:{
    type: String,
    required: true,
    
},
password:{
    type: String,
    required: true,
},
phone:{
    type: String,
    required: true,
},
gender:{
    type: String,
    required: true,
},
publicID:{
    type: String,
},
dob:{
    type: String,
    required: true,
},
},
{
    timestamp: true,
},
);

const User = mongoose.model(UserSchema, "User");

export default User;