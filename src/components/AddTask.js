import React from 'react'
import { useDispatch } from 'react-redux'
import { startAddTask } from '../redux/action/taskAction'
import FormComponent from './FormComponent'

const AddTask = (props) => {
     const dispatch = useDispatch()

     const addTask = (formData) => {
          dispatch(startAddTask(formData))
     }

     return (
          <div>
               <h1>Add Task</h1>
               <FormComponent addTask={addTask} />
          </div>
     )
}

export default AddTask