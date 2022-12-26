const { Router } = require("express");
const User = require("../models/user");
const authRouter = Router();
authRouter.post("/signup",(req, res) => {
    const user = new User(req.body);
    //MD5, SHA*
    //BLACK2
    user.save((err,success) => {
        if(err){
            return res.send(500).send({ message:"Error Occured" });
        }
        return res.status(201).send({ message:"Signup Success", user:['_doc'] }) //JWT
    });
});

authRouter.post("/login",async (req,res) => {
    const { username,password } = req.body;
    const validUser = await User.find({ username, password });
    return res.send(validUser);
});
module.exports = authRouter;
 