import axios from 'axios'

export const startGetTasks = () => {
     return (dispatch) => {
          axios.get("http://localhost:3033/api/tasks")
               .then((response) => {
                    dispatch(get_tasks(response.data))
               })
               .catch((err) => {
                    alert(err.message)
               })
     }
}

export const startAddTask = (formData) => {
     return (dispatch) => {
          axios.post('http://localhost:3033/api/tasks', formData)
               .then((response) => {
                    console.log('formData', formData)
                    dispatch(add_task(response.data))
               })
               .catch((err) => {
                    console.log('formData', formData)
                    alert(err.message)
               })
     }
}

export const startDeleteTask = (id) => {
     return (dispatch) => {
          axios.delete(`http://localhost:3033/api/tasks/${id}`)
               .then((response) => {
                    dispatch(delete_Task(response.data))
               })
               .catch((err) => {
                    alert(err.message)
               })
     }
}

export const startEditTask = (formData) => {
     return (dispatch) => {
          axios.put(`http://localhost:3033/api/tasks/${formData.id}`, formData)
               .then((response) => {
                    dispatch(edit_task(response.data))
               })
               .catch((err) => {
                    alert(err.message)
               })
     }
}

export const get_tasks = (data) => {
     return {
          type: "GET_TASKS",
          payload: data
     }
}

export const add_task = (a) => {
     return {
          type: "ADD_TASK",
          payload: a
     }
}

export const delete_Task = (a) => {
     return {
          type: "DELETE_TASK",
          payload: a
     }
}

export const edit_task = (formData) => {
     return {
          type: "EDIT_TASK",
          payload: formData
     }
}