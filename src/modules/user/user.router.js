
import  express  from "express"
import { signUp,login,changePassword,deleteUser} from "./user.controller.js"
export const userRouter = express.Router()
userRouter.post('/signUp',signUp)
userRouter.post('/login',login)
userRouter.put('/changePassword',changePassword)
userRouter.delete('/deleteUser',deleteUser)

