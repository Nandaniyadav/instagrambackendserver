const{Schema,model} = require("mongoose");

const UserSchema = new Schema({
 name: {String},
 username: String,
 email:String,
 password:String, //never store password as text in db
 mobile:Number,
 country:String,
 gender:{
    type:"String",
    enum:["Male","Female","unspacified"]
 },
});

const user = model("User",UserSchema);
module.exports = user;

/*
User data:
{
   "name":"John Doe",
   "username":"jhon1234",
   "email":"jhon@12.com",
   "password":"12345678",
   "mobile":"1234567890",
   "countery":"India",
   "gender":"Male"
 } 
 */