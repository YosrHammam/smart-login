import express from 'express'
import { addTask, updateTask, deleteTask,asksAfterDeadline, getALLTasks, getAllTasksOfOneUser, getTasksOfOneUser } from './task.controller.js'
import { auth } from '../../middleware/auth.js'
export const taskRouter = express.Router()
taskRouter.post('/addTask',auth,addTask)
taskRouter.put('/updateTask',auth,updateTask)
taskRouter.delete('/deleteTask',auth,deleteTask)
taskRouter.get('/getALLTasks',auth,getALLTasks)
// taskRouter.get('/:assignTo',getTasksOfOneUser)
taskRouter.get('/getTasksOfOneUser',getTasksOfOneUser)
taskRouter.get('/getAllTasksOfOneUser',getAllTasksOfOneUser)
taskRouter.get('/tasksAfterDeadline',asksAfterDeadline)