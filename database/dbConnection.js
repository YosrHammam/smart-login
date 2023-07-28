import mongoose from "mongoose";

export const connection = ()=>{mongoose.connect('mongodb://127.0.0.1:27017/Asignment6').then(()=>{
    console.log('database connected ');
}).catch((err)=>{
    console.log(`database error ${err}`);

})}