import { taskModel } from "../../../database/models/task.model.js"

const addTask = async (req, res, next) => {
    const { title, description, status, userId, assignTo, deadline } = req.body;
    
            const tasks = await taskModel.insertMany({ title, description, status, userId, assignTo, deadline })
            return res.json({ message: "Done ", tasks })
   


}
//The findOneAndUpdate() method returns the document after the update, whereas the updateOne() method of MongoDB also updates one document but it does not return any document , but return modified count
const updateTask = async (req, res, next) => {
    const { title, description, status, userId} = req.body;
    
    const tasks = await taskModel.findOneAndUpdate({ userId }, { title, description, status }, { new: "true" })
    if (tasks) {
    
                return res.json({ message: "Done ", tasks })
      
    }
    else {
        return res.json({ message: "task not found " })
    }

}
const deleteTask = async (req, res, next) => {
  
    const tasks = await taskModel.findOneAndDelete({ _id }, { new: "true" })
    if (tasks){
        return res.json({ message: "Done ", tasks })
    }
    return res.json({ message: "task not found " })
}
const getALLTasks = async (req, res, next) => {
  
            const tasks = await taskModel.find({})
            return res.json({ message: "success", tasks })
}
const getTasksOfOneUser = async (req, res, next) => {
    // const {assignTo} =req.params;
    // const {assignTo} =req.body;
    const tasks = await taskModel.find({}).populate('assignTo', 'userName -_id')
    return res.json({ message: "success", tasks })
}

const getAllTasksOfOneUser = () => { }
const asksAfterDeadline = () => { }
export {
    addTask, updateTask, deleteTask, getALLTasks, getTasksOfOneUser, getAllTasksOfOneUser, asksAfterDeadline
}