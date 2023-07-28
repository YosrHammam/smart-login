
import mongoose from "mongoose"
import { Schema } from "mongoose"
const userSchema = new Schema({
       userName:{type:String}
     , email:{type:String}
      , passwordHashed :{type:String},
      cPassword:{type:String},
        age:{type:Number},
        gender: {
          type: String,
          enum: ['male', 'female']
        },
        role:{
          type: String,
          enumorator:['creator','student']
        }
,
     phone :{type:String}
})
export const userModel = mongoose.model('user',userSchema);