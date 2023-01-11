const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        username: {type:String,required:true},
        password: {type:String,required:true},
        firstName: {type:String,required:true},
        lastName: {type:String,required:true},
        isAdmin: {type:Boolean,required:true,default:false},
        //shegulo
        followers: [],
        following: []
    },
    {timestamps: true}
)

const UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel