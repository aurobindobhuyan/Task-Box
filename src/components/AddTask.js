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
          <>
               <h1>Add Task</h1>
               <FormComponent addTask={addTask} />
          </>
     )
}

export default AddTask