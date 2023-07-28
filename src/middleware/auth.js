import jwt from 'jsonwebtoken'
export const auth=(req,res,next)=>{
    let token =req.header('token');
// const token = req.headers.token;
jwt.verify(token,'my name is yosr',async(err,decoded)=>{
    if(err){
        return res.json({ message: "invalid token",err } )   
    }
    else{
next()
    }
   
})
}
