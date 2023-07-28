import mongoose from "mongoose"
import { Schema } from "mongoose"
const taskSchema =new Schema({
    title :String,
     description:String ,
      status:{type:String,enum: ["toDo" , "doing" , "done"]} ,
       userId :Number , 
       assignTo :{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
       }, 
       deadline :{type:Date,
    required:true}
})
export const taskModel = mongoose.model('task',taskSchema)