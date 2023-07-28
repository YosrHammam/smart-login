import { userModel } from "../../../database/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";
const signUp = async(req,res,next)=>{
    const {userName , email , passwordHashed ,cPassword, age , gender , phone}=req.body;
    const user =  await userModel.findOne({email})
    if(user){
        return res.json({message:"user is already exist",user})
    }
    // if((passwordHashed === cPassword)&& !user)
    else{
        const hash = bcrypt.hashSync(passwordHashed,8);
        const users =  await userModel.insertMany({userName , email , passwordHashed:hash , cPassword,age , gender , phone
           })
        return res.json({
            message:"user is added in this collection",users
        })
    }
  
}
//find() ...> []
// findOne() ...> {} | null
// findById() ....>
const login = async(req,res,next)=>{
    const {email,passwordHashed} =req.body;
    // if email is correct ...> check password
// console.log({passwordHashed} , user.passwordHashed);
    let user= await userModel.findOne({email})
    let match = bcrypt.compareSync(passwordHashed,user.passwordHashed);
    if(user && match){
        //sign ( payload , secret key )
        let token = jwt.sign({id:user._id,name:user.userName},'my name is yosr')
    return res.json({message:"this user is already exist ", token})
    }
    else{
        return  res.json({message:"user is not found or password incorrect"})
    }


}
const changePassword = async(req,res,next)=>{
    const {_id,passwordHashed} =req.body;
    const pass =  await userModel.findOne({passwordHashed})
    if(!pass){
        return res.json({message:"this password is not exist"})
    }
    else{
        let users = await userModel.findByIdAndUpdate({_id},{passwordHashed})
        return res.json({message:"data is corrected",users})
    }
 

}
const deleteUser= async(req,res,next)=>{
    const {_id} =req.body;
    let users = await userModel.findByIdAndDelete({_id})
    return res.json({message:"data is corrected",users})

}
export{
    signUp,login,changePassword,deleteUser
}