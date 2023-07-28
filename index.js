import express from 'express';
import bootstrab from './src/index.router.js';
import { connection } from './database/dbConnection.js';
import { userModel } from './database/models/user.model.js';
import { taskModel } from './database/models/task.model.js';
import { userRouter } from './src/modules/user/user.router.js';
import { taskRouter } from './src/modules/task/task.router.js';
const app =express();
const port = 5002;
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
 bootstrab(app,express)
connection()
userModel
taskModel
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})
