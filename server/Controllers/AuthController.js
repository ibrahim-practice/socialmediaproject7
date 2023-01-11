
const UserModel = require('../Models/userModel.js')
const bcrypt = require('bcrypt')

exports.registerUser = async(req,res)=>{
    const {username,password,firstName,lastName} = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new UserModel({username,hashedPass,firstName,lastName})

    try{
        await newUser.save()
        .req.status(200).json(newUser)
    }catch(error){
        res.status(500).json({message: error.message})
    
    }
}