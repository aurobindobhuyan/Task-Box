import React from "react"
import FormComponent from "./FormComponent"
import { useDispatch } from "react-redux"
import { startEditTask } from "../redux/action/taskAction"

const EditTask = (props) => {
     const { id, title, status, handleToggle } = props
     const dispatch = useDispatch()

     const addTask = (formData) => {
          dispatch(startEditTask(formData))
          handleToggle()
     }

     return (
          <FormComponent id={id} addTask={addTask} title={title} status={status} />
     )
}

export default EditTask